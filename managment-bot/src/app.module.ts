import { ENV_NAMES } from '@lib/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BotModule } from './bot/bot.module';
import { SceneModule } from './bot/scenes/scene.module';
import { DatabaseModule } from './crud/database/database.module';
import { SiteModule } from './crud/site/site.module';
import { UsersModule } from './crud/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ENV_NAMES.ENV_PATH(process.env.NODE_ENV),
      isGlobal: true,
    }),
    BotModule,
    SiteModule,
    SceneModule,
    DatabaseModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
