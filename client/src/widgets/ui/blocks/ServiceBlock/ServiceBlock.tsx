import { getAnimationStyle } from '@/shared/helpers/lib';
import { IServiceBlockProps } from '@/shared/types/ui/blocks';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import { ServiceCard, Title } from '@/widgets/ui/elements';
import styles from './ServiceBlock.module.scss';

interface Props {
	data: IServiceBlockProps;
}

export const ServiceBlock = ({ data }: Props) => {
	const content = data.data.data;

	return (
		<BlockWithTitle>
			<Container className={getAnimationStyle('from-bottom-to-top')}>
				<Title title={data.title} />
				<div className={styles.services}>
					{content.map((service, index) => (
						<ServiceCard key={index} data={service} />
					))}
				</div>
			</Container>
		</BlockWithTitle>
	);
};
