import { appLinks, SITE_NAME } from '@/shared/constants';
import Link from 'next/link';
import styles from './Logo.module.scss';

interface Props {
	className?: string;
	logo?: string;
	color?: 'primary' | 'secondary';
}

const getLogoColor = (color: 'primary' | 'secondary') => {
	switch (color) {
		case 'primary':
			return styles.primary;
		case 'secondary':
			return styles.secondary;
		default:
			return styles.primary;
	}
};

export const Logo = ({ className, logo, color = 'primary' }: Props) => {
	return (
		<Link
			href={appLinks.user.main}
			className={`${styles.logo} ${getLogoColor(color)} ${className ? className : ''}`}
		>
			{logo ? logo : SITE_NAME}
		</Link>
	);
};
