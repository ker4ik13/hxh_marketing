import { getAnimationStyle } from '@/shared/helpers/lib';
import type { ITeamBlockProps } from '@/shared/types/ui/blocks';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import { TeamPerson, Title } from '@/widgets/ui/elements';
import styles from './TeamBlock.module.scss';

interface Props {
	data: ITeamBlockProps;
}

export const TeamBlock = ({ data }: Props) => {
	return (
		<BlockWithTitle id={data.blockId}>
			<Container className={getAnimationStyle(data.animation)} size='medium'>
				<Title title={data.title} />
				<div className={styles.team}>
					{data.data.data.map((person, index) => (
						<TeamPerson key={person.id} data={person} />
					))}
				</div>
			</Container>
		</BlockWithTitle>
	);
};
