import { appLinks, SITE_NAME } from '@/shared/constants';
import Link from 'next/link';
import styles from './Logo.module.scss';

interface Props {
	className?: string;
}

export const Logo = ({ className }: Props) => {
	return (
		<Link
			href={appLinks.user.main}
			className={`${styles.logo} ${className ? className : ''}`}
		>
			{SITE_NAME}
		</Link>
	);
};
