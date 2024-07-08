import type {
	CustomButtonProps,
	CustomButtonSize,
	CustomButtonType,
	CustomLinkProps,
} from '@/shared/types/ui';
import Link from 'next/link';
import styles from './CustomButton.module.scss';

const getButtonTypeStyles = (type?: CustomButtonType) => {
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

const getButtonSizeStyles = (size?: CustomButtonSize) => {
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
	}: CustomLinkProps) => {
		return (
			<Link
				href={href}
				target={target}
				className={`${styles.button} ${getButtonTypeStyles(color)} ${getButtonSizeStyles(size)} ${className ? className : ''}`}
			>
				{children}
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
	}: CustomButtonProps) => {
		return (
			<button
				className={`${styles.button} ${getButtonTypeStyles(color)} ${getButtonSizeStyles(size)} ${className ? className : ''}`}
				type={type}
				disabled={disabled}
				onClick={onClick}
			>
				{children}
			</button>
		);
	},
};
