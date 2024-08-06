import { BotModule } from '@/bot/bot.module';
import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';

@Module({
  imports: [forwardRef(() => BotModule), DatabaseModule],
  controllers: [SiteController],
  providers: [SiteService],
  exports: [SiteService],
})
export class SiteModule {}
