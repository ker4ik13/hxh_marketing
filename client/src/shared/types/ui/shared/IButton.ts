import type { IIcons } from './IconType';

export type ICustomButtonType = 'primary' | 'secondary' | 'transparent';
export type ICustomButtonSize = 'small' | 'medium' | 'large';

export interface ICustomButtonProps {
	children: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	color?: ICustomButtonType;
	size?: ICustomButtonSize;
	className?: string;
	icon?: IIcons;
}

export interface ICustomLinkProps {
	children: string;
	href: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	color?: ICustomButtonType;
	size?: ICustomButtonSize;
	className?: string;
	icon?: IIcons;
}
