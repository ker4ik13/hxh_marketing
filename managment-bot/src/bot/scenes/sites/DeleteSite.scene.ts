import { BotMessages } from '@/bot/messages';
import { SiteService } from '@/crud/site/site.service';
import { BotNavigation, BotRoutes, BotScenes } from '@/lib/common';
import { SiteSceneProps } from '@/lib/types';
import { emojis } from '@/lib/utils';
import { Inject } from '@nestjs/common';
import type { Site } from '@prisma/client';
import { Action, Ctx, Wizard, WizardStep } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { WizardContext } from 'telegraf/scenes';

@Wizard(BotRoutes.user.site.delete.value)
export class DeleteSiteScene {
  constructor(@Inject() private siteService: SiteService) {}
  private name: string;
  private site: Site;

  // Удалить сайт
  @WizardStep(1)
  async enter(@Ctx() ctx: WizardContext): Promise<void> {
    const props = ctx.scene.state as SiteSceneProps;
    this.site = props.site;

    await ctx.editMessageText(
      `Вы уверены, что хотите удалить сайт <b>${this.site.name}</b>?`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              Markup.button.callback(
                `${emojis.checkmark} Да`,
                BotNavigation.user.scenes.site.delete.yesDelete(this.site.id),
              ),
              Markup.button.callback(
                `${emojis.cross} Нет`,
                BotNavigation.user.scenes.site.delete.exit,
              ),
            ],
          ],
        },
        parse_mode: 'HTML',
      },
    );

    ctx.wizard.next();
    return;
  }

  // Удалить сайт
  @WizardStep(2)
  @Action(BotRoutes.user.site.delete.yes.regex)
  async deleteCurrentSite(@Ctx() ctx: WizardContext): Promise<void> {
    await this.siteService.removeById(this.site.id);
    await ctx.reply(BotMessages.site.removed(this.site), {
      parse_mode: 'HTML',
    });
    await ctx.scene.leave();
    const sceneProps = BotScenes.user.menu();
    await ctx.scene.enter(sceneProps.sceneId, sceneProps.initialState);
    return;
  }

  // Выход из сцены
  @Action(BotRoutes.user.site.delete.exit.value)
  async exit(@Ctx() ctx: WizardContext) {
    await ctx
      .answerCbQuery()
      .catch(() =>
        ctx.reply(`${emojis.warning} Произошла ошибка, попробуйте раз`),
      );
    await ctx.scene.leave();
    await ctx.scene.enter(BotNavigation.user.scenes.site.current.enter, {
      site: this.site,
    });
  }
}
