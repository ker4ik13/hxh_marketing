import {
  createSiteAvailableKeyboard,
  createSiteKeyboard,
  createSiteKeyboardFinal,
} from '@/bot/keyboard';
import { SiteService } from '@/crud/site/site.service';
import { BotRoutes } from '@/lib/common';
import { getMessageFromCtx } from '@/lib/helpers';
import { emojis } from '@/lib/utils';
import { Inject } from '@nestjs/common';
import { Action, Ctx, Wizard, WizardStep } from 'nestjs-telegraf';
import { WizardContext } from 'telegraf/scenes';
import { CallbackQuery } from 'telegraf/typings/core/types/typegram';
import { BotMessages } from '../../messages';

@Wizard(BotRoutes.user.site.create.value)
export class CreateSiteScene {
  constructor(@Inject() private siteService: SiteService) {}

  private name: string;
  private siteName: string;
  private siteUrl: string;
  private siteIsAvailable: boolean;

  @Action(BotRoutes.user.site.create.step.regex)
  async goToCurrentStep(@Ctx() ctx: WizardContext & any): Promise<void> {
    const step = +(ctx.callbackQuery as CallbackQuery.DataQuery).data.split(
      '|',
    )[1];
    ctx.wizard.selectStep(step - 1);
    ctx.wizard.step(ctx);
    return;
  }

  @Action(BotRoutes.user.site.create.skipUrl.value)
  async goToCreateAvailable(@Ctx() ctx: WizardContext & any): Promise<void> {
    ctx.wizard.selectStep(2);
    ctx.wizard.step(ctx);
    return;
  }

  @WizardStep(1)
  async enter(@Ctx() ctx: WizardContext): Promise<void> {
    await ctx
      .editMessageText(BotMessages.site.create.steps[0]['ru'], {
        reply_markup: {
          inline_keyboard: createSiteKeyboard(),
        },
      })
      .catch(() => {
        ctx.reply(BotMessages.site.create.steps[0]['ru'], {
          reply_markup: {
            inline_keyboard: createSiteKeyboard(),
          },
        });
      });

    ctx.wizard.next();
    return;
  }

  @WizardStep(2)
  async writeSiteUrl(@Ctx() ctx: WizardContext): Promise<void> {
    const siteName = getMessageFromCtx(ctx);
    this.siteName = siteName;

    await ctx
      .editMessageText(BotMessages.site.create.steps[1]['ru'], {
        reply_markup: {
          inline_keyboard: createSiteKeyboard({
            skip: true,
            goStep: 1,
          }),
        },
      })
      .catch(() => {
        ctx.reply(BotMessages.site.create.steps[1]['ru'], {
          reply_markup: {
            inline_keyboard: createSiteKeyboard({
              skip: true,
              goStep: 1,
            }),
          },
        });
      });

    ctx.wizard.next();
    return;
  }

  @WizardStep(3)
  async writeSiteAvailable(@Ctx() ctx: WizardContext): Promise<void> {
    const siteUrl = getMessageFromCtx(ctx);
    this.siteUrl = siteUrl;

    await ctx
      .editMessageText(BotMessages.site.create.steps[2]['ru'], {
        reply_markup: {
          inline_keyboard: createSiteAvailableKeyboard({
            goStep: 2,
          }),
        },
      })
      .catch(() => {
        ctx.reply(BotMessages.site.create.steps[2]['ru'], {
          reply_markup: {
            inline_keyboard: createSiteAvailableKeyboard({
              goStep: 2,
            }),
          },
        });
      });

    ctx.wizard.next();
    return;
  }

  @Action(BotRoutes.user.site.create.available.value)
  async createSiteAvailable(@Ctx() ctx: WizardContext): Promise<void> {
    this.siteIsAvailable = true;

    const site = {
      name: this.siteName,
      url: this.siteUrl,
      isAvailable: this.siteIsAvailable,
    };

    try {
      const newSite = await this.siteService.create(site);

      await ctx.reply(BotMessages.site.create.steps[3]['ru'], {
        reply_markup: {
          inline_keyboard: createSiteKeyboardFinal(newSite),
        },
      });

      ctx.wizard.next();
      return;
    } catch (error) {
      ctx.reply(`${emojis.warning} Произошла ошибка, попробуйте раз`);
      return;
    }
  }

  @Action(BotRoutes.user.site.create.unavailable.value)
  async createSiteUnavailable(@Ctx() ctx: WizardContext): Promise<void> {
    this.siteIsAvailable = false;

    const site = {
      name: this.siteName,
      url: this.siteUrl,
      isAvailable: this.siteIsAvailable,
    };

    try {
      const newSite = await this.siteService.create(site);

      await ctx.reply(BotMessages.site.create.steps[3]['ru'], {
        reply_markup: {
          inline_keyboard: createSiteKeyboardFinal(newSite),
        },
      });

      ctx.wizard.next();
      return;
    } catch (error) {
      ctx.reply(`${emojis.warning} Произошла ошибка, попробуйте раз`);
      return;
    }
  }

  // Посмотреть созданный сайт
  @Action(BotRoutes.user.site.current.check.regex)
  async checkCurrentSite(@Ctx() ctx: WizardContext): Promise<void> {
    const siteId = (ctx.callbackQuery as CallbackQuery.DataQuery).data.split(
      '|',
    )[1];

    const site = await this.siteService.findById(+siteId);

    await ctx.scene.leave();
    await ctx.scene.enter(BotRoutes.user.site.current.value, { site });
    return;
  }

  // Выход из сцены
  @Action(BotRoutes.user.site.create.exit.value)
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
