import type { CustomLinkProps } from '../shared';

export interface INewsMessages {
	id: number;
	attributes: {
		locale?: string;
		delay: number;
		messages: {
			id: number;
			label: string;
			color: 'green' | 'yellow' | 'red' | 'gray';
			link?: CustomLinkProps;
		}[];
		createdAt: string;
		updatedAt?: string;
		publishedAt?: string;
		localizations: {
			data?: Omit<INewsMessages, 'localizations'>[];
		};
	};
}
