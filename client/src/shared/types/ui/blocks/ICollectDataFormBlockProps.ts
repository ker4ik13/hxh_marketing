import type { ICustomButtonProps, ICustomInput } from '../shared';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface ICollectDataFormProps {
	id: number;
	attributes: {
		uniqueBlockName: string;
		locale?: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
		title: string;
		description?: string;
		contentPosition: 'left' | 'right';
		inputs: ICustomInput[];
		button: ICustomButtonProps;
	};
}

export interface ICollectDataFormBlockProps extends IDefaultBlockProps {
	data: {
		data: ICollectDataFormProps;
	};
}
