import type { IAccordionBlockProps } from '@/shared/types/ui/blocks';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import { Accordion, Title } from '@/widgets/ui/elements';
import styles from './AccordionBlock.module.scss';

interface Props {
	data: IAccordionBlockProps;
}

export const AccordionBlock = ({ data }: Props) => {
	return (
		<BlockWithTitle id={data.blockId}>
			<Container size='medium'>
				<Title title={data.title} />
				<div className={styles.accordions}>
					{data.data.data.attributes.data.map((accordion) => (
						<Accordion accordion={accordion} key={accordion.id} />
					))}
				</div>
			</Container>
		</BlockWithTitle>
	);
};
