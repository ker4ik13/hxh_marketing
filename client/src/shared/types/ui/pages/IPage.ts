import type { IBlock } from '../blocks/IBlock';

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
		path: string;
		blocks: IBlock<any>[];
	};
}
