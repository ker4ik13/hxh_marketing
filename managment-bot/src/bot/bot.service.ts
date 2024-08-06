import type { CreateUserDto } from '@/crud/users/dto';
import { UsersService } from '@/crud/users/users.service';
import { Injectable } from '@nestjs/common';
import { Context, Telegraf } from 'telegraf';
import { User } from 'telegraf/typings/core/types/typegram';

@Injectable()
export class BotService {
  constructor(private readonly usersService: UsersService) {}
  async sendMessageByChatId(
    bot: Telegraf<Context>,
    chatId: number,
    message: string,
  ) {
    return await bot.telegram.sendMessage(chatId, message, {
      parse_mode: 'HTML',
    });
  }

  async addNewUser(user: CreateUserDto) {
    const isUserExist = await this.usersService.findById(user.id);

    if (isUserExist) {
      return;
    }

    return await this.usersService.create(user);
  }

  async checkUserIsAdmin(user: User) {
    const isUserExist = await this.usersService.findById(user.id);

    if (isUserExist) {
      return isUserExist.isAdmin;
    }

    return false;
  }

  async findAllUsers() {
    return await this.usersService.findAll();
  }
}
