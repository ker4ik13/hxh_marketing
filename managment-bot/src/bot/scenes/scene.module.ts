import { SiteModule } from '@/crud/site/site.module';
import { Module } from '@nestjs/common';
import { BotModule } from '../bot.module';
import { MainScene } from './Main.scene';
import {
  ChangeUrlSite,
  ChooseSiteScene,
  CreateSiteScene,
  CurrentSiteScene,
  DeleteSiteScene,
  RenameSiteScene,
} from './sites';

@Module({
  imports: [SiteModule, BotModule],
  controllers: [],
  providers: [
    ChooseSiteScene,
    RenameSiteScene,
    CurrentSiteScene,
    MainScene,
    DeleteSiteScene,
    CreateSiteScene,
    ChangeUrlSite,
  ],
  exports: [
    ChooseSiteScene,
    RenameSiteScene,
    CurrentSiteScene,
    MainScene,
    DeleteSiteScene,
    CreateSiteScene,
    ChangeUrlSite,
  ],
})
export class SceneModule {}
