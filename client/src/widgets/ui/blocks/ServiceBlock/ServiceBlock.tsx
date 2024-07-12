import { getAnimationStyle } from '@/shared/helpers/lib';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import { ServiceCard, Title } from '@/widgets/ui/elements';
import styles from './ServiceBlock.module.scss';

export const ServiceBlock = () => {
	return (
		<BlockWithTitle>
			<Container className={getAnimationStyle('from-bottom-to-top')}>
				<Title
					title={{
						label: 'услуги',
					}}
				/>
				<div className={styles.services}>
					<ServiceCard />
					<ServiceCard />
					<ServiceCard />
					<ServiceCard />
					<ServiceCard />
				</div>
			</Container>
		</BlockWithTitle>
	);
};
