import type { ILink } from '../shared';

export interface INavigation {
	id: number;
	attributes: {
		logo: string;
		links: ILink[];
		locale?: string;
		localizations: {
			data?: Omit<INavigation, 'localizations'>[];
		};
		createdAt: string;
		updatedAt?: string;
	};
}
