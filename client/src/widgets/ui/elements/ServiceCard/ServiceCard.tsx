import { CustomButton } from '@/shared/ui';
import { ArrowIcon, RobotIcon } from '@/shared/ui/icons';
import Link from 'next/link';
import styles from './ServiceCard.module.scss';

export const ServiceCard = () => {
	return (
		<div className={styles.serviceCard}>
			<div className={styles.header}>
				<div className={styles.titleWrapper}>
					<div className={styles.iconWrapper}>
						<RobotIcon className={styles.previewIcon} />
					</div>
					<p className={styles.title}>веб-дизайн</p>
				</div>
				<Link href='/' className={styles.linkIcon}>
					<ArrowIcon />
				</Link>
			</div>
			<div className={styles.content}>
				<p className={styles.description}>
					Наши услуги по веб-дизайну направлены на создание визуально
					потрясающих и удобных в использовании веб-сайтов, которые надолго
					запомнятся.
				</p>
				<div className={styles.footer}>
					<div className={styles.button}>
						<CustomButton.Link size='medium' href='/'>
							Подробнее
						</CustomButton.Link>
					</div>
					<p className={styles.price}>от 24 000₽</p>
				</div>
			</div>
		</div>
	);
};
