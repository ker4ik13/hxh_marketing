import { API_URL, REVALIDATE_TIME } from '@/shared';
import { DataWithoutMeta } from '@/shared/types/api';
import { IFooter } from '@/shared/types/ui/elements';

const queryParams = [
	'populate[0]=pages',
	'populate[1]=logo',
	'populate[2]=text.link',
	'populate[3]=contacts',
];

// 10.07.2024
// Footer service / v.1.0.0
export class FooterService {
	static async getFooter() {
		const request = new Request(`${API_URL}/footer?${queryParams.join('&')}`, {
			method: 'GET',
			next: {
				revalidate: REVALIDATE_TIME,
			},
		});
		try {
			const response = await fetch(request);
			const responseJson: DataWithoutMeta<IFooter> = await response.json();
			return responseJson;
		} catch (error) {
			throw new Error('Error get footer.\nFile: FooterService.ts:27', {
				cause: error,
			});
		}
	}
}
