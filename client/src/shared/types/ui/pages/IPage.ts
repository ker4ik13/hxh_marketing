import type { StrapiImage } from '../../api';
import type { IBlock } from '../blocks';

export interface IPage {
	id: number;
	attributes: {
		createdAt: string;
		updatedAt?: string;
		publishedAt?: string;
		locale?: string;
		metaTitle: string;
		metaDescription?: string;
		metaKeywords?: string;
		metaImage: {
			data: StrapiImage[];
		};
		path: string;
		blocks: IBlock<any>[];
	};
}
