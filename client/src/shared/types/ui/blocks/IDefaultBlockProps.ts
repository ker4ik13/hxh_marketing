import type { IAnimationDirection } from '../shared';

export interface IDefaultBlockProps {
	id: number;
	blockName: string;
	blockId?: string;
	animation?: IAnimationDirection;
}
