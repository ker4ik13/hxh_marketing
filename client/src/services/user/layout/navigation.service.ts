import { API_URL, REVALIDATE_TIME } from '@/shared';
import { DataWithoutMeta } from '@/shared/types/api';
import { INavigation, INewsMessages } from '@/shared/types/ui/elements';

const queryParams = ['populate[0]=links', 'populate[1]=localizations.links'];

// 10.07.2024
// Navigation service / v.1.0.0
export class NavigationService {
	static async getNavigation() {
		const request = new Request(
			`${API_URL}/navigation?${queryParams.join('&')}`,
			{
				method: 'GET',
				next: {
					revalidate: REVALIDATE_TIME,
				},
			},
		);
		try {
			const response = await fetch(request);
			const responseJson: DataWithoutMeta<INavigation> = await response.json();
			return responseJson;
		} catch (error) {
			throw new Error('Error get navigation.\nFile: NavigationService.ts:26', {
				cause: error,
			});
		}
	}

	static async getNewsMessages() {
		const request = new Request(
			`${API_URL}/news-message?populate[0]=messages.link`,
			{
				method: 'GET',
				next: {
					revalidate: REVALIDATE_TIME,
				},
			},
		);
		try {
			const response = await fetch(request);
			const responseJson: DataWithoutMeta<INewsMessages> =
				await response.json();
			return responseJson;
		} catch (error) {
			throw new Error(
				'Error get news messages.\nFile: NavigationService.ts:45',
				{
					cause: error,
				},
			);
		}
	}
}
