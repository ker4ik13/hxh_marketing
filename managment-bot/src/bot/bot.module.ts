import { SiteModule } from '@/crud/site/site.module';
import { ENV_NAMES } from '@lib/common/constants';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { session } from 'telegraf';
import { BotService } from './bot.service';
import { BotUpdate } from './bot.update';
import { UsersModule } from '@/crud/users/users.module';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        token: configService.get(ENV_NAMES.TELEGRAM_BOT_TOKEN),
        middlewares: [session()],
      }),
    }),
    forwardRef(() => SiteModule),
    UsersModule,
  ],
  providers: [BotService, BotUpdate],
  exports: [BotService],
})
export class BotModule {}
