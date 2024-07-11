import { $server } from '@/services/http';
import { ICollectDataForm } from '@/shared/types/forms';

// 12.07.2024 / v.1.0.0
// Сервис для отправки сообщений в Telegram
export class TelegramService {
	// Сообщение о неопубликованном блоке
	static async sendNotPublishedBlock(blockName: string) {
		await $server.post('/telegram-bot-strapi/send-message', {
			message: `Блок [${blockName}] добавлен в страницу, но не опубликован.`,
		});
	}

	static async sendNewClient(client: ICollectDataForm) {
		await $server.post('/telegram-bot-strapi/send-message', {
			message: `Новый клиент!\nИмя: ${client.name}\nТелефон: ${client.phone}`,
		});
	}
}
