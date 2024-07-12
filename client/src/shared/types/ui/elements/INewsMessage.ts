import type { ICustomLinkProps } from '../shared';

export interface INewsMessages {
	id: number;
	attributes: {
		locale?: string;
		delay: number;
		messages: {
			id: number;
			label: string;
			color: 'green' | 'yellow' | 'red' | 'gray';
			link?: ICustomLinkProps;
		}[];
		createdAt: string;
		updatedAt?: string;
		publishedAt?: string;
		localizations: {
			data?: Omit<INewsMessages, 'localizations'>[];
		};
	};
}
