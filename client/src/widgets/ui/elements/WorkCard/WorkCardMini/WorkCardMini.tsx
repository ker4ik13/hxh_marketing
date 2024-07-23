import testImage from '@/data/user/images/primary-gradient.jpg';
import { ArrowIcon } from '@/shared/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WorkCardMini.module.scss';

interface Props {
	data: any;
}

export const WorkCardMini = () => {
	return (
		<Link href={'/'} className={styles.workCard}>
			<Image
				src={testImage}
				alt=''
				width={545}
				height={300}
				draggable={false}
				className={styles.image}
			/>
			<div className={styles.content}>
				<p className={styles.title}>
					Разработка дизайна для мебельной фабрики “Твоя кухня”
				</p>
				<div className={styles.lowerString}>
					<p className={styles.tag}>Web-design</p>
					<Link href='/' className={styles.icon}>
						<ArrowIcon />
					</Link>
				</div>
			</div>
		</Link>
	);
};
