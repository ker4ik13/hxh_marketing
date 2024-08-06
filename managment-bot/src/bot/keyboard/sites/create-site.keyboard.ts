import { BotNavigation } from '@/lib/common';
import { emojis } from '@/lib/utils';
import { Site } from '@prisma/client';
import { Markup } from 'telegraf';

interface CreateSiteKeyboardOptions {
  skip?: boolean;
  goStep?: number;
}

export const createSiteKeyboard = (options?: CreateSiteKeyboardOptions) => {
  if (options && options.skip) {
    if (options.goStep !== undefined) {
      return [
        [
          Markup.button.callback(
            `${emojis.back} Назад`,
            BotNavigation.user.scenes.site.create.goToStep(options.goStep),
          ),
          Markup.button.callback(
            'Пропустить',
            BotNavigation.user.scenes.site.create.skipWriteUrl,
          ),
        ],
      ];
    }
    return [
      [
        Markup.button.callback(
          'Пропустить',
          BotNavigation.user.scenes.site.create.skipWriteUrl,
        ),
      ],
    ];
  }

  if (options && options.goStep !== undefined) {
    return [
      [
        Markup.button.callback(
          `${emojis.back} Назад`,
          BotNavigation.user.scenes.site.create.goToStep(options.goStep),
        ),
        Markup.button.callback(
          `${emojis.cross} Отмена`,
          BotNavigation.user.scenes.site.create.exit,
        ),
      ],
    ];
  }

  return [
    [
      Markup.button.callback(
        `${emojis.cross} Отмена`,
        BotNavigation.user.scenes.site.create.exit,
      ),
    ],
  ];
};

export const createSiteAvailableKeyboard = (
  options?: CreateSiteKeyboardOptions,
) => {
  if (!options) {
    return [
      [
        Markup.button.callback(
          `${emojis.available} Доступен`,
          BotNavigation.user.scenes.site.create.isAvailable,
        ),

        Markup.button.callback(
          `${emojis.unavailable} Недоступен`,
          BotNavigation.user.scenes.site.create.isUnavailable,
        ),
      ],
      [
        Markup.button.callback(
          `${emojis.cross} Отмена`,
          BotNavigation.user.scenes.site.create.exit,
        ),
      ],
    ];
  }

  if (options && options.goStep !== undefined) {
    return [
      [
        Markup.button.callback(
          `${emojis.available} Доступен`,
          BotNavigation.user.scenes.site.create.isAvailable,
        ),

        Markup.button.callback(
          `${emojis.unavailable} Недоступен`,
          BotNavigation.user.scenes.site.create.isUnavailable,
        ),
      ],
      [
        Markup.button.callback(
          `${emojis.back}Назад`,
          BotNavigation.user.scenes.site.create.goToStep(options.goStep),
        ),
        Markup.button.callback(
          `${emojis.cross} Отмена`,
          BotNavigation.user.scenes.site.create.exit,
        ),
      ],
    ];
  }
};

export const createSiteKeyboardFinal = (site: Site) => {
  return [
    [
      Markup.button.callback(
        `Посмотреть сайт`,
        BotNavigation.user.scenes.site.create.checkCurrentSite(site.id),
      ),
    ],
    [
      Markup.button.callback(
        `${emojis.website} Все сайты`,
        BotNavigation.user.scenes.site.create.exit,
      ),
    ],
  ];
};
