import type { StrapiImage } from '../../api';
import type { IContactLink } from '../shared';
import type { LabelWithValue } from './LabelWithValue';

export interface ITeamPerson {
	id: number;
	attributes: {
		image: StrapiImage;
		name: string;
		job: string;
		info: LabelWithValue[];
		contacts: IContactLink[];
		contactLink: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}
