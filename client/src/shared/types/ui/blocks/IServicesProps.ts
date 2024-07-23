import type { IService, ITitle } from '../elements';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

// export interface IServiceBlock {
// 	id: number;
// 	attributes: {
// 		uniqueBlockName: string;
// 		locale?: string;
// 		createdAt: string;
// 		updatedAt?: string;
// 		publishedAt: string;
// 		data: IService[];
// 	};
// }

export interface IServiceBlockProps extends IDefaultBlockProps {
	title?: ITitle;
	data: {
		data: IService[];
	};
}
