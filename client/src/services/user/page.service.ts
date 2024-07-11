import { API_URL, REVALIDATE_TIME } from '@/shared';
import type { DataWithMeta } from '@/shared/types/api';
import type { IPage } from '@/shared/types/ui/pages';

const queryParams = [
	// Title with Buttons
	'populate[blocks][populate][0]=data.buttons',
	// Reviews
	'populate[blocks][populate][1]=title.link',
	'populate[blocks][populate][2]=reviews.author.avatar',
	// Accordions
	'populate[blocks][populate][3]=data.data',
	// Team
	'populate[blocks][populate][4]=data.contacts',
	'populate[blocks][populate][5]=data.info',
	'populate[blocks][populate][6]=data.image',
];
// 10.07.2024
// Page service / v.1.0.0
export class PageService {
	static async getPageData(slug: string) {
		const request = new Request(
			`${API_URL}/pages?filters[path]=${slug}&${queryParams.join('&')}`,
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
			throw new Error(`Error get page ${slug}.\nFile: PageService.ts:36`, {
				cause: error,
			});
		}
	}
}

// {{server}}/api/pages?filters[path]=/&populate[blocks][populate][0]=title.link&populate[blocks][populate][1]=reviews.author.avatar&populate[blocks][populate][2]=accordions&populate[blocks][populate][3]=team.contacts&populate[blocks][populate][4]=team.info&populate[blocks][populate][5]=team.image&populate[blocks][populate][6]=buttons
