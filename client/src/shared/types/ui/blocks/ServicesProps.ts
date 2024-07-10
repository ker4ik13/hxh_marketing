import type { ITitle } from '../ITitle';

export interface ServicesProps {
	id: number;
	attributes: {
		blockId?: string;
		title: ITitle;
		createdAt: string;
		updatedAt?: string;
	};
}
