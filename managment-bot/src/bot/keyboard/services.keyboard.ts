import { BotNavigation } from '@/lib/common';
import { emojis } from '@/lib/utils';
import { Markup } from 'telegraf';
import { InlineKeyboardMarkup } from 'telegraf/typings/core/types/typegram';

export const servicesKeyboard = (): InlineKeyboardMarkup => {
  return {
    inline_keyboard: [
      [
        Markup.button.callback(
          `${emojis.website} Сайты`,
          BotNavigation.user.scenes.site.choose.enter,
        ),
      ],
      // [Markup.button.callback(`${emojis.setting} Настройки`, 'settings')],
    ],
  };
};
