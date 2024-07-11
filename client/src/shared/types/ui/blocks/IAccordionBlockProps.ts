import type { IAccordion, ITitle } from '../elements';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface IAccordionBlock {
	id: number;
	attributes: {
		uniqueBlockName: string;
		locale?: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
		data: IAccordion[];
	};
}
export interface IAccordionBlockProps extends IDefaultBlockProps {
	title?: ITitle;
	data: {
		data: IAccordionBlock;
	};
}
