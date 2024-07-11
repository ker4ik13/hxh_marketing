import type { IContactLink, ILink } from '../shared';
import type { ILogo } from './ILogo';
import type { ITextWithLink } from './ITextWithLink';

export interface IFooter {
	id: number;
	attributes: {
		logo: ILogo;
		pages: ILink[];
		text?: ITextWithLink;
		copyrightText: string;
		contacts: IContactLink[];
		locale?: string;
		localizations: {
			data?: Omit<IFooter, 'localizations'>[];
		};
		createdAt: string;
		updatedAt?: string;
	};
}
