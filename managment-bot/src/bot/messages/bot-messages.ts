import { emojis } from '@/lib/utils';
import type { Prisma, Site } from '@prisma/client';

type SiteTypes = Site | Prisma.SiteCreateInput | Prisma.SiteUpdateInput;

export const BotMessages = {
  site: {
    log: (site: Site) => {
      return parseMessage('log', site);
    },
    created: (site: Prisma.SiteCreateInput) => {
      return parseMessage('create', site);
    },
    updated: (site: Prisma.SiteUpdateInput) => {
      return parseMessage('update', site);
    },
    removed: (site: Site) => {
      return parseMessage('remove', site);
    },
    create: {
      steps: [
        {
          ru: 'Введите имя сайта',
        },
        {
          ru: 'Введите URL сайта',
        },
        {
          ru: 'Укажите доступность сайта',
        },
        {
          ru: 'Сайт успешно создан!',
        },
      ],
    },
  },
};

function parseMessage(
  type: 'create' | 'update' | 'remove' | 'log',
  site: SiteTypes,
) {
  site;
  switch (type) {
    case 'log':
      return `
      ${getSiteName(site.name)}${getSiteUrl(site.url)}${getSiteAvailable(site.isAvailable)}`;
    case 'create':
      return `
			Сайт успешно создан!\n\n${getSiteName(site.name)}${getSiteUrl(site.url)}${getSiteAvailable(site.isAvailable)}`;

    case 'update':
      return `
			Сайт успешно обновлен!\n\n${getSiteName(site.name)}${getSiteUrl(site.url)}${getSiteAvailable(site.isAvailable)}`;

    case 'remove':
      return `
			Сайт успешно удален!\n\n${getSiteName(site.name)}${getSiteUrl(site.url)}`;
  }
}
function getSiteName(name: string | Prisma.StringFieldUpdateOperationsInput) {
  return `${emojis.woman} Имя: ${name}`;
}

function getSiteAvailable(
  value: boolean | Prisma.BoolFieldUpdateOperationsInput,
) {
  return value ? '\n🟢 Сайт доступен' : '\n🔴 Сайт недоступен';
}

function getSiteUrl(
  url?: string | Prisma.NullableStringFieldUpdateOperationsInput,
) {
  return url ? `\n📎 Ссылка: <a href="${url}">${url}</a>` : '';
}

export function getSitePreview(site: Site) {
  return `${site.isAvailable ? emojis.available : emojis.unavailable} | ${site.name}${site.url ? ` | ${site.url}` : ''}`;
}
