import { getIconFromName } from '@/shared/helpers/lib';
import type {
	ICustomButtonProps,
	ICustomButtonSize,
	ICustomButtonType,
	ICustomLinkProps,
} from '@/shared/types/ui/shared';
import Link from 'next/link';
import styles from './CustomButton.module.scss';

const getButtonTypeStyles = (type?: ICustomButtonType) => {
	switch (type) {
		case 'primary':
			return styles.primary;
		case 'secondary':
			return styles.secondary;
		case 'transparent':
			return styles.transparent;
		default:
			return styles.primary;
	}
};

const getButtonSizeStyles = (size?: ICustomButtonSize) => {
	switch (size) {
		case 'small':
			return styles.small;
		case 'medium':
			return styles.medium;
		case 'large':
			return styles.large;
		default:
			return styles.small;
	}
};

// 08.07.2024
// Custom button component / v.1.0.0
export const CustomButton = {
	Link: ({
		color,
		children,
		href,
		size,
		target,
		className,
		icon,
	}: ICustomLinkProps) => {
		return (
			<Link
				href={href}
				target={target}
				className={`${styles.button} ${getButtonTypeStyles(color)} ${getButtonSizeStyles(size)} ${className ? className : ''}`}
				aria-label={children}
			>
				{children}
				{icon && getIconFromName(icon, styles.icon)}
			</Link>
		);
	},
	Button: ({
		color,
		children,
		onClick,
		size,
		type,
		disabled,
		className,
		icon,
	}: ICustomButtonProps) => {
		return (
			<button
				className={`${styles.button} ${getButtonTypeStyles(color)} ${getButtonSizeStyles(size)} ${className ? className : ''}`}
				type={type}
				disabled={disabled}
				onClick={onClick}
				aria-label={children}
			>
				{children}
				{icon && getIconFromName(icon, styles.icon)}
			</button>
		);
	},
};
