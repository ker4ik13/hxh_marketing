import type { CustomLinkProps } from '../IButton';
import type { DefaultBlockProps } from './DefaultBlockProps';

export interface ITitleWithButtons extends DefaultBlockProps {
	title: string;
	subtitle?: string;
	buttons?: CustomLinkProps[];
}
