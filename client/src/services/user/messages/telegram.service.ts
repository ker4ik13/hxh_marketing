import { $server } from '@/services/http';
import type { TelegramResult } from '@/shared/types/api/telegram';

const BOT_URL = '/telegram-bot-strapi/send-message';

interface ClientValues {
	[key: string]: string;
}

// 12.07.2024 / v.1.0.0
// Сервис для отправки сообщений в Telegram
export class TelegramService {
	// Сообщение о неопубликованном блоке
	static async sendNotPublishedBlock(blockName: string) {
		await $server.post(BOT_URL, {
			message: `Блок [${blockName}] добавлен в страницу, но не опубликован.`,
		});
	}

	// Сообщение об оставленной заявке
	static async sendNewClient(
		client: ClientValues,
		options?: {
			blockName?: string;
		},
	) {
		let message = 'Новый клиент!\n\n';

		if (options && options.blockName) {
			message += `Блок: ${options.blockName}\n\n`;
		}

		for (let key in client) {
			message += `${key}: ${client[key]}\n`;
		}

		return await $server.post<TelegramResult>(BOT_URL, {
			message,
		});
	}
}
