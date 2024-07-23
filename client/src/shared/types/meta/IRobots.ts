import { IRobotsPage } from './IRobotsPage';

export interface IRobots {
	id: number;
	attributes: {
		name: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt?: string;
		locale?: string;
		userAgent: string;
		allow: IRobotsPage[];
		disallow?: IRobotsPage[];
	};
}
