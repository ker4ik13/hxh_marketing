export type CustomButtonType = 'primary' | 'secondary' | 'transparent';
export type CustomButtonSize = 'small' | 'medium' | 'large';

export interface CustomButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	color?: CustomButtonType;
	size?: CustomButtonSize;
	className?: string;
}

export interface CustomLinkProps {
	children: React.ReactNode;
	href: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	color?: CustomButtonType;
	size?: CustomButtonSize;
	className?: string;
}
