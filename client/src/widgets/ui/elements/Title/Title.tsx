import type { ITitle } from '@/shared/types/ui';
import { ArrowIcon } from '@/shared/ui/icons';
import Link from 'next/link';
import styles from './Title.module.scss';

interface TitleProps {
	title: ITitle;
}

export const Title = ({ title }: TitleProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>{title.label}</h2>
				{title.link && title.link.label && (
					<Link
						className={styles.link}
						href={title.link.href}
						target={title.link.target}
					>
						{title.link.label}
						<ArrowIcon className={styles.icon} />
					</Link>
				)}
			</div>
		</div>
	);
};
