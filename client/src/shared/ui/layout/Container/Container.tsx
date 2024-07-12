import styles from './Container.module.scss';

interface Props {
	size?: 'small' | 'medium' | 'big';
	children?: React.ReactNode;
	className?: string;
}

const getContainerSizeStyles = (size?: 'small' | 'medium' | 'big') => {
	switch (size) {
		case 'small':
			return styles.small;
		case 'medium':
			return styles.medium;
		case 'big':
			return styles.big;
		default:
			return styles.medium;
	}
};

// 11.07.2024 / v.1.0.0
// Компонент контейнера
export const Container = ({ children, size, className }: Props) => {
	return (
		<div
			className={`${styles.container} ${getContainerSizeStyles(size)} ${className ? className : ''}`}
		>
			{children}
		</div>
	);
};
