import { SiteService } from '@/crud/site/site.service';
import { BotNavigation, BotRoutes } from '@/lib/common';
import { getMessageFromCtx } from '@/lib/helpers';
import { SiteSceneProps } from '@/lib/types';
import { emojis } from '@/lib/utils';
import { Inject } from '@nestjs/common';
import type { Site } from '@prisma/client';
import { Action, Ctx, Wizard, WizardStep } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { WizardContext } from 'telegraf/scenes';

@Wizard(BotRoutes.user.site.rename.value)
export class RenameSiteScene {
  constructor(@Inject() private siteService: SiteService) {}
  private name: string;
  private site: Site;

  // Переименовать сайт
  @WizardStep(1)
  async enter(@Ctx() ctx: WizardContext): Promise<void> {
    const props = ctx.scene.state as SiteSceneProps;
    this.site = props.site;

    await ctx.editMessageText(
      `Введите новое для сайта <b>${this.site.name}</b>`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              Markup.button.callback(
                `${emojis.back} Отмена`,
                BotNavigation.user.scenes.site.rename.exit,
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

  // Сайт успешно переименован
  @WizardStep(2)
  async renameSite(@Ctx() ctx: WizardContext): Promise<void> {
    const newSiteName = getMessageFromCtx(ctx);
    const newSite = await this.siteService.update(this.site.id, {
      name: newSiteName,
    });

    ctx.scene.leave();
    ctx.scene.enter(BotNavigation.user.scenes.site.current.enter, {
      site: newSite,
    });
    return;
  }

  // Выход из сцены
  @Action(BotRoutes.user.site.rename.exit.value)
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
