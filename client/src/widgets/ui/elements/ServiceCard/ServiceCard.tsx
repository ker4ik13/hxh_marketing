import { IService, IServicePrice } from '@/shared/types/ui/elements';
import { CustomButton } from '@/shared/ui';
import { ArrowIcon, RobotIcon } from '@/shared/ui/icons';
import Link from 'next/link';
import styles from './ServiceCard.module.scss';

interface Props {
	data: IService;
}

const getServicePrice = (price: IServicePrice) => {
	if (!price) {
		return 'По договоренности';
	}

	switch (price.state) {
		case 'Фикс':
			return `${price.amount.toLocaleString('ru')}${price.currency}`;
		case 'От':
			return `От ${price.amount.toLocaleString('ru')}${price.currency}`;
		case 'По договоренности':
		default:
			return 'По договоренности';
	}
};

export const ServiceCard = ({ data }: Props) => {
	return (
		<div className={styles.serviceCard}>
			<div className={styles.header}>
				<div className={styles.titleWrapper}>
					<div className={styles.iconWrapper}>
						<RobotIcon className={styles.previewIcon} />
					</div>
					<p className={styles.title}>{data.attributes.title}</p>
				</div>
				<Link href={data.attributes.slug} className={styles.linkIcon}>
					<ArrowIcon />
				</Link>
			</div>
			<div className={styles.content}>
				<p className={styles.description}>{data.attributes.description}</p>
				<div className={styles.footer}>
					<div className={styles.button}>
						<CustomButton.Link {...data.attributes.button}></CustomButton.Link>
					</div>
					<p className={styles.price}>
						{getServicePrice(data.attributes.price)}
					</p>
				</div>
			</div>
		</div>
	);
};
