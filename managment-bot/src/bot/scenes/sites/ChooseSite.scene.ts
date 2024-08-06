import { chooseSiteKeyboard } from '@/bot/keyboard';
import { getSitePreview } from '@/bot/messages';
import { SiteService } from '@/crud/site/site.service';
import { BotNavigation, BotRoutes, BotScenes } from '@/lib/common';
import { ChooseSiteSceneProps } from '@/lib/types';
import { emojis } from '@/lib/utils';
import { Inject } from '@nestjs/common';
import { Action, Ctx, Wizard, WizardStep } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { WizardContext } from 'telegraf/scenes';
import { CallbackQuery } from 'telegraf/typings/core/types/typegram';

@Wizard(BotRoutes.user.site.choose.value)
export class ChooseSiteScene {
  constructor(@Inject() private siteService: SiteService) {}

  private name: string;
  private options: ChooseSiteSceneProps = { firstMessage: 'edit' };

  // Вывод сайтов
  @WizardStep(1)
  async enter(@Ctx() ctx: WizardContext): Promise<void> {
    const sites = await this.siteService.findAll();

    if (!sites || !sites.length) {
      await ctx.reply('Сайтов пока нет', {
        reply_markup: {
          inline_keyboard: [chooseSiteKeyboard()],
        },
      });
      return;
    }

    const sitesKeyboard = sites.map((site) => {
      return [
        Markup.button.callback(
          getSitePreview(site),
          BotNavigation.user.scenes.site.choose.byId(site.id),
        ),
      ];
    });

    sitesKeyboard.push(chooseSiteKeyboard());

    if (this.options.firstMessage === 'edit') {
      await ctx
        .editMessageText('Выберите сайт', {
          reply_markup: {
            inline_keyboard: sitesKeyboard,
          },
        })
        .catch(() => {
          ctx.reply('Выберите сайт', {
            reply_markup: {
              inline_keyboard: sitesKeyboard,
            },
          });
        });
    } else {
      await ctx.reply('Выберите сайт', {
        reply_markup: {
          inline_keyboard: sitesKeyboard,
        },
      });
    }
    ctx.wizard.next();
    return;
  }

  // Выбор сайта
  @Action(BotRoutes.user.site.create.value)
  async createSite(@Ctx() ctx: WizardContext): Promise<void> {
    await ctx.scene.leave();
    await ctx.scene.enter(BotRoutes.user.site.create.value);
    return;
  }

  // Выбор сайта
  @Action(BotRoutes.user.site.choose.regex)
  async chooseSite(@Ctx() ctx: WizardContext): Promise<void> {
    const siteId = (ctx.callbackQuery as CallbackQuery.DataQuery).data.split(
      '|',
    )[1];

    const site = await this.siteService.findById(+siteId);

    await ctx.scene.leave();
    await ctx.scene.enter(BotRoutes.user.site.current.value, { site });
    return;
  }

  // Выход из сцены
  @Action(BotRoutes.user.site.choose.exit.value)
  async exit(@Ctx() ctx: WizardContext) {
    await ctx
      .answerCbQuery()
      .catch(() =>
        ctx.reply(`${emojis.warning} Произошла ошибка, попробуйте раз`),
      );
    await ctx.scene.leave();
    const sceneProps = BotScenes.user.menu({
      firstMessage: 'edit',
    });
    await ctx.scene.enter(sceneProps.sceneId, sceneProps.initialState);
  }
}
