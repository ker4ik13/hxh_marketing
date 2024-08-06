import { SiteService } from '@/crud/site/site.service';
import { BotNavigation, BotRoutes, BotScenes } from '@/lib/common';
import { MenuSceneProps } from '@/lib/types';
import { emojis } from '@/lib/utils';
import { Inject } from '@nestjs/common';
import {
  Action,
  Command,
  Ctx,
  Hears,
  Wizard,
  WizardStep,
} from 'nestjs-telegraf';
import type { SceneContext, WizardContext } from 'telegraf/scenes';
import { BotService } from '../bot.service';
import { servicesKeyboard } from '../keyboard';

@Wizard(BotRoutes.user.menu.value)
export class MainScene {
  constructor(
    @Inject() private siteService: SiteService,
    @Inject() private botService: BotService,
  ) {}

  private name: string;
  private options: MenuSceneProps;

  @WizardStep(1)
  async enter(@Ctx() ctx: WizardContext): Promise<void> {
    this.options = ctx.scene.state as MenuSceneProps;

    // ctx.reply('Hey', {
    //   reply_markup: {
    //     remove_keyboard: true,
    //   },
    // });
    if (this.options.firstMessage === 'edit') {
      await ctx
        .editMessageText('Главное меню', {
          reply_markup: servicesKeyboard(),
        })
        .catch(() => {
          ctx.reply('Главное меню', {
            reply_markup: servicesKeyboard(),
          });
        });
    } else {
      await ctx.reply('Главное меню', {
        reply_markup: servicesKeyboard(),
      });
    }
    ctx.wizard.next();
    return;
  }

  @Action(BotRoutes.user.site.choose.value)
  async sites(@Ctx() ctx: SceneContext) {
    await ctx.scene.leave();
    await ctx.scene.enter(BotNavigation.user.scenes.site.choose.enter);
    return;
  }

  // Выход из сцены
  @Action(BotRoutes.user.menu.exit.value)
  async exit(@Ctx() ctx: WizardContext) {
    await ctx
      .answerCbQuery()
      .catch(() =>
        ctx.reply(`${emojis.warning} Произошла ошибка, попробуйте раз`),
      );
    ctx.editMessageText('Привет!', {
      reply_markup: servicesKeyboard(),
    });
    ctx.wizard.next();
    return;
  }

  @Hears('/menu')
  @Command('/menu')
  async menu(@Ctx() ctx: SceneContext) {
    const sceneProps = BotScenes.user.menu({
      firstMessage: 'edit',
    });
    await ctx.scene.enter(sceneProps.sceneId, sceneProps.initialState);
    return;
  }

  @Hears('/users')
  @Command('/users')
  async users(@Ctx() ctx: SceneContext) {
    const isUserAdmin = await this.botService.checkUserIsAdmin(ctx.from);

    if (!isUserAdmin) {
      return;
    }

    const users = await this.botService.findAllUsers();
    // TODO: доделать
    console.log(users);
    return;
  }
}
