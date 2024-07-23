import type { ICustomLinkProps, IIcons } from '../shared';

export interface IService {
	id: number;
	attributes: {
		icon: IIcons;
		slug: string;
		title: string;
		description: string;
		price: IServicePrice;
		button: ICustomLinkProps;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}

export type IServicePrice =
	| {
			state: 'Фикс';
			amount: number;
			currency: string;
	  }
	| {
			state: 'От';
			amount: number;
			currency: string;
	  }
	| {
			state: 'По договоренности';
	  };
