import { BotService } from '@/bot/bot.service';
import { BotMessages } from '@/bot/messages/bot-messages';
import { CHATS } from '@/lib/common/constants';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { SiteService } from './site.service';

@Controller('sites')
export class SiteController {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly siteService: SiteService,
    private readonly botService: BotService,
  ) {}

  @Post()
  async create(@Body() createSiteDto: CreateSiteDto) {
    const site = await this.siteService.create(createSiteDto);

    if (!site) {
      throw new Error(`Site ${createSiteDto.name} not created!`);
    }

    CHATS.forEach((chatId) => {
      this.botService.sendMessageByChatId(
        this.bot,
        chatId,
        BotMessages.site.created(createSiteDto),
      );
    });

    return site;
  }

  @Get()
  findAll() {
    return this.siteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.siteService.findById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateSiteDto: UpdateSiteDto) {
    const site = await this.siteService.update(id, updateSiteDto);

    if (!site) {
      throw new Error('Site not created');
    }

    CHATS.forEach((chatId) => {
      this.botService.sendMessageByChatId(
        this.bot,
        chatId,
        BotMessages.site.updated(site),
      );
    });

    return site;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const site = await this.siteService.removeById(id);

    if (!site) {
      throw new Error(`Site ${name} not find`);
    }

    CHATS.forEach((chatId) => {
      this.botService.sendMessageByChatId(
        this.bot,
        chatId,
        BotMessages.site.removed(site),
      );
    });

    return site;
  }
}
