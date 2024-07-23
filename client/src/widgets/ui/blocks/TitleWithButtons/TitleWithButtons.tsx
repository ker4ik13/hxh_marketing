import bgHeaderImage from '@/data/user/images/Bg image header.png';
import { getAnimationStyle } from '@/shared/helpers/lib';
import type { ITitleWithButtonsProps } from '@/shared/types/ui/blocks';
import { CustomButton } from '@/shared/ui';
import { Container } from '@/shared/ui/layout';
import Image from 'next/image';
import styles from './TitleWithButtons.module.scss';

interface Props {
	data: ITitleWithButtonsProps;
}

export const TitleWithButtons = ({ data }: Props) => {
	const content = data.data.data.attributes;

	return (
		<div className={styles.mainScreen} id={data.blockId}>
			<div className={styles.bgImageDiv}>
				<Image
					className={styles.bgImage}
					src={bgHeaderImage}
					alt={''}
					width={1920}
					height={1080}
					quality={100}
					priority
				/>
			</div>
			<Container className={getAnimationStyle(data.animation)} size='medium'>
				<div className={styles.content}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>{content.title && content.title}</h1>
						<p className={styles.subtitle}>
							{content.subtitle && content.subtitle}
						</p>
					</div>
					<div className={styles.buttons}>
						{content.buttons &&
							content.buttons.length > 0 &&
							content.buttons.map((link, index) => (
								<div key={index}>
									<CustomButton.Link
										size='large'
										color={link.color}
										href={link.href}
									>
										{link.children}
									</CustomButton.Link>
								</div>
							))}
					</div>
				</div>
			</Container>
		</div>
	);
};
