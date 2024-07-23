import { API_URL, REVALIDATE_TIME } from '@/shared';
import type { DataWithMeta } from '@/shared/types/api';
import type { IRobots } from '@/shared/types/meta';
import type { IPage } from '@/shared/types/ui/pages';

// 16.07.2024 / v.1.0.0
// Сервис для получения мета-данных
export class MetaService {
	// Получить все страницы
	static async getAllPages() {
		const request = new Request(
			`${API_URL}/pages?populate=*&pagination[pageSize]=100`,
			{
				method: 'GET',
				next: {
					revalidate: REVALIDATE_TIME,
				},
			},
		);
		try {
			const response = await fetch(request);
			const responseJson: DataWithMeta<IPage[]> = await response.json();
			return responseJson;
		} catch (error) {
			throw new Error(`Error get all pages.\nFile: meta.service.ts: 25`, {
				cause: error,
			});
		}
	}

	static async getRobots() {
		const request = new Request(
			`${API_URL}/robots?pagination[pageSize]=100&populate=*`,
			{
				method: 'GET',
				next: {
					revalidate: REVALIDATE_TIME,
				},
			},
		);
		try {
			const response = await fetch(request);
			const responseJson: DataWithMeta<IRobots[]> = await response.json();
			return responseJson;
		} catch (error) {
			throw new Error(`Error get robots.txt.\nFile: meta.service.ts: 46`, {
				cause: error,
			});
		}
	}
}
