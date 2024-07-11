import { IComponentProps } from './IComponentMap';
import { IDefaultBlockProps } from './IDefaultBlockProps';

export interface IBlock<T extends IComponentProps> extends IDefaultBlockProps {
	data: {
		data: T[];
	};
}
