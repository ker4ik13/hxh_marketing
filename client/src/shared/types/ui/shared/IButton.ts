import type { IIcons } from './IconType';

export type CustomButtonType = 'primary' | 'secondary' | 'transparent';
export type CustomButtonSize = 'small' | 'medium' | 'large';

export interface CustomButtonProps {
	children: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	color?: CustomButtonType;
	size?: CustomButtonSize;
	className?: string;
	icon?: IIcons;
}

export interface CustomLinkProps {
	children: string;
	href: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	color?: CustomButtonType;
	size?: CustomButtonSize;
	className?: string;
	icon?: IIcons;
}
