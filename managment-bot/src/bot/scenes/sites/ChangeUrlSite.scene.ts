import { SiteService } from '@/crud/site/site.service';
import { BotRoutes } from '@/lib/common';
import { getMessageFromCtx } from '@/lib/helpers';
import { SiteSceneProps } from '@/lib/types';
import { emojis } from '@/lib/utils';
import { Inject } from '@nestjs/common';
import type { Site } from '@prisma/client';
import { Action, Ctx, Wizard, WizardStep } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { WizardContext } from 'telegraf/scenes';

@Wizard(BotRoutes.user.site.changeUrl.value)
export class ChangeUrlSite {
  constructor(@Inject() private siteService: SiteService) {}
  private name: string;
  private site: Site;

  // Изменить URL сайта
  @WizardStep(1)
  async enter(@Ctx() ctx: WizardContext): Promise<void> {
    const props = ctx.scene.state as SiteSceneProps;
    this.site = props.site;

    await ctx.editMessageText(
      `Введите новый URL для сайта <b>${this.site.name}</b>`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              Markup.button.callback(
                `${emojis.back} Отмена`,
                BotRoutes.user.site.changeUrl.exit.value,
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

  // URL успешно установлен
  @WizardStep(2)
  async changeSiteUrl(@Ctx() ctx: WizardContext): Promise<void> {
    const newSiteUrl = getMessageFromCtx(ctx);
    const newSite = await this.siteService.update(this.site.id, {
      url: newSiteUrl,
    });

    ctx.scene.leave();
    ctx.scene.enter(BotRoutes.user.site.current.value, { site: newSite });
    return;
  }

  // Выход из сцены
  @Action(BotRoutes.user.site.changeUrl.exit.value)
  async exit(@Ctx() ctx: WizardContext) {
    await ctx
      .answerCbQuery()
      .catch(() =>
        ctx.reply(`${emojis.warning} Произошла ошибка, попробуйте раз`),
      );
    await ctx.scene.leave();
    await ctx.scene.enter(BotRoutes.user.site.current.value, {
      site: this.site,
    });
  }
}
