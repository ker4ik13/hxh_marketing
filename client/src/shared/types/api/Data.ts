import type { Meta } from '../meta';

export interface DataWithMeta<T> {
	data: T;
	meta: Meta;
}

export interface DataWithoutMeta<T> {
	data: T;
	meta?: Meta;
}
