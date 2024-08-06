import { SiteService } from '@/crud/site/site.service';
import { BotRoutes } from '@/lib/common';
import { SiteSceneProps } from '@/lib/types';
import { emojis } from '@/lib/utils';
import { Inject } from '@nestjs/common';
import type { Site } from '@prisma/client';
import { Action, Ctx, Wizard, WizardStep } from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/scenes';
import { siteKeyboard } from '../../keyboard';
import { BotMessages } from '../../messages';

@Wizard(BotRoutes.user.site.current.value)
export class CurrentSiteScene {
  constructor(@Inject() private siteService: SiteService) {}

  private name: string;
  private siteName: string;
  private site: Site;

  // Вывод сайтов
  @WizardStep(1)
  async enter(@Ctx() ctx: WizardContext): Promise<void> {
    const props = ctx.scene.state as SiteSceneProps;
    this.site = props.site;

    await ctx
      .editMessageText(BotMessages.site.log(props.site), {
        parse_mode: 'HTML',
        reply_markup: siteKeyboard(props.site),
      })
      .catch(() => {
        ctx.reply(BotMessages.site.log(props.site), {
          parse_mode: 'HTML',
          reply_markup: siteKeyboard(props.site),
        });
      });

    ctx.wizard.next();
    return;
  }

  // Изменить статус сайта
  @Action(BotRoutes.user.site.changeAvailable.regex)
  async changeAvailable(@Ctx() ctx: WizardContext): Promise<void> {
    const newSite = await this.siteService.update(this.site.id, {
      isAvailable: !this.site.isAvailable,
    });
    this.site = newSite;

    await ctx.editMessageText(BotMessages.site.log(newSite), {
      parse_mode: 'HTML',
      reply_markup: siteKeyboard(newSite),
    });

    ctx.wizard.next();

    return;
  }

  // Изменить URL сайта
  @Action(BotRoutes.user.site.changeUrl.regex)
  async changeSiteUrl(@Ctx() ctx: WizardContext): Promise<void> {
    await ctx.scene.leave();
    await ctx.scene.enter(BotRoutes.user.site.changeUrl.value, {
      site: this.site,
    });
    return;
  }

  // Переименовать сайта
  @Action(BotRoutes.user.site.rename.regex)
  async renameSite(@Ctx() ctx: WizardContext): Promise<void> {
    await ctx.scene.leave();
    await ctx.scene.enter(BotRoutes.user.site.rename.value, {
      site: this.site,
    });
    return;
  }

  // Удалить сайта
  @Action(BotRoutes.user.site.delete.regex)
  async deleteSite(@Ctx() ctx: WizardContext): Promise<void> {
    await ctx.scene.leave();
    await ctx.scene.enter(BotRoutes.user.site.delete.value, {
      site: this.site,
    });
    return;
  }

  // Выход из сцены
  @Action(BotRoutes.user.site.current.exit.value)
  async exit(@Ctx() ctx: WizardContext) {
    await ctx
      .answerCbQuery()
      .catch(() =>
        ctx.reply(`${emojis.warning} Произошла ошибка, попробуйте раз`),
      );
    await ctx.scene.leave();
    await ctx.scene.enter(BotRoutes.user.site.choose.value);
    return;
  }
}
