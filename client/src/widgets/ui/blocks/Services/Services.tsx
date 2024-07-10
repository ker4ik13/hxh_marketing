import { ServicesProps } from '@/shared/types/ui/blocks';
import { Title } from '@/widgets/ui/elements';
import styles from './Services.module.scss';

export const Services = ({ id, attributes }: ServicesProps) => {
	return (
		<div
			className={styles.services}
			id={attributes.blockId ? attributes.blockId : ''}
		>
			<div className={styles.container}>
				<Title title={attributes.title} />
			</div>
		</div>
	);
};
