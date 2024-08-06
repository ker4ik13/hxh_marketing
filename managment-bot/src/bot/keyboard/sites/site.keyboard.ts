import { BotNavigation } from '@/lib/common';
import { emojis } from '@/lib/utils';
import type { Site } from '@prisma/client';
import { Markup } from 'telegraf';
import type { InlineKeyboardMarkup } from 'telegraf/typings/core/types/typegram';

// Обновленная функция для создания инлайн-клавиатуры
export const siteKeyboard = (site: Site): InlineKeyboardMarkup => {
  return {
    inline_keyboard: [
      [
        Markup.button.callback(
          `${emojis.website} Переименовать`,
          BotNavigation.user.scenes.site.rename.byId(site.id),
        ),
        Markup.button.callback(
          `${emojis.link} ${site.url ? 'Изменить URL' : 'Добавить URL'}`,
          BotNavigation.user.scenes.site.changeUrl.byId(site.id),
        ),
      ],
      [
        Markup.button.callback(
          `${site.isAvailable ? emojis.available : emojis.unavailable} ${site.isAvailable ? 'Доступен' : 'Недоступен'}`,
          BotNavigation.user.scenes.site.changeAvailable(site.id),
        ),
      ],
      [
        Markup.button.callback(
          `${emojis.cross} Удалить`,
          BotNavigation.user.scenes.site.delete.byId(site.id),
        ),
      ],
      [
        Markup.button.callback(
          `${emojis.back} Назад`,
          BotNavigation.user.scenes.site.current.exit,
        ),
      ],
    ],
  };
};
