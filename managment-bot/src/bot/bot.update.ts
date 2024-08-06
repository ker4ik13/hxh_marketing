import type { CreateUserDto } from '@/crud/users/dto';
import { UsersService } from '@/crud/users/users.service';
import { BotScenes } from '@/lib/common';
import {
  Action,
  Command,
  Ctx,
  Hears,
  InjectBot,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { SceneContext } from 'telegraf/scenes';
import { BotService } from './bot.service';

@Update()
export class BotUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly botService: BotService,
    private readonly usersService: UsersService,
  ) {}

  @Start()
  @Command('/start')
  @Action('start')
  async start(@Ctx() ctx: SceneContext) {
    const user: CreateUserDto = {
      firstName: ctx.from.first_name,
      lastName: ctx.from.last_name,
      username: ctx.from.username,
      languageCode: ctx.from.language_code,
      id: ctx.from.id,
      isBot: ctx.from.is_bot,
    };

    await this.botService.addNewUser(user);
    const sceneProps = BotScenes.user.menu();
    await ctx.scene.enter(sceneProps.sceneId, sceneProps.initialState);
    return;
  }

  @Hears('/menu')
  @Command('/menu')
  async menu(@Ctx() ctx: SceneContext) {
    const sceneProps = BotScenes.user.menu();
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

    const users = await this.usersService.findAll();
    // TODO: доделать
    console.log(users);
    return;
  }
}
