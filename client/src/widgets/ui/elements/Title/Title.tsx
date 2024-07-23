import type { ITitle } from '@/shared/types/ui/elements';
import { ArrowIcon } from '@/shared/ui/icons';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import styles from './Title.module.scss';

interface TitleProps {
	title?: ITitle;
}

export const Title = ({ title }: TitleProps) => {
	if (!title || !title.label) {
		return;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.title}>
					<Markdown>{title.label}</Markdown>
				</div>
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
