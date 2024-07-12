import type { ICustomLinkProps } from '../shared';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface ITitleWithButtons {
	id: number;
	attributes: {
		title: string;
		subtitle?: string;
		buttons?: ICustomLinkProps[];
		uniqueBlockName: string;
		locale?: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}

export interface ITitleWithButtonsProps extends IDefaultBlockProps {
	data: {
		data: ITitleWithButtons;
	};
}
