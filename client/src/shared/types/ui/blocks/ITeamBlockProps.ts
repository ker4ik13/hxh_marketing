import type { ITeamPerson, ITitle } from '../elements';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface ITeamBlock {
	id: number;
	attributes: {
		uniqueBlockName: string;
		locale?: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
		data: ITeamPerson[];
	};
}

export interface ITeamBlockProps extends IDefaultBlockProps {
	title?: ITitle;
	data: {
		data: ITeamPerson[];
	};
}
