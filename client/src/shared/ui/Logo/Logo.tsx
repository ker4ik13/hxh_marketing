import { appLinks, SITE_NAME } from '@/shared/constants';
import Link from 'next/link';
import styles from './Logo.module.scss';

interface Props {
	className?: string;
	logo?: string;
}

export const Logo = ({ className, logo }: Props) => {
	return (
		<Link
			href={appLinks.user.main}
			className={`${styles.logo} ${className ? className : ''}`}
		>
			{logo ? logo : SITE_NAME}
		</Link>
	);
};
