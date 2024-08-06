import { BotNavigation } from '@/lib/common';
import { emojis } from '@/lib/utils';
import { Markup } from 'telegraf';

export const chooseSiteKeyboard = () => {
  return [
    Markup.button.callback(
      `${emojis.pin} Добавить`,
      BotNavigation.user.scenes.site.create.enter,
    ),
    Markup.button.callback(
      `${emojis.back} Главная`,
      BotNavigation.user.scenes.site.choose.exit,
    ),
  ];
};
