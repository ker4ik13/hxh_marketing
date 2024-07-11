import type { CustomLinkProps } from '../shared';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface ITitleWithButtons {
	id: number;
	attributes: {
		title: string;
		subtitle?: string;
		buttons?: CustomLinkProps[];
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
