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
	return (
		<header className={styles.mainScreen} id={data.blockId}>
			<Image
				className={styles.bgImage}
				src={bgHeaderImage}
				alt={''}
				width={1920}
				height={1080}
				quality={100}
				priority
			/>
			<Container className={getAnimationStyle(data.animation)} size='medium'>
				<div className={styles.content}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>
							{data.data.data.attributes.title &&
								data.data.data.attributes.title}
						</h1>
						<p className={styles.subtitle}>
							{data.data.data.attributes.subtitle &&
								data.data.data.attributes.subtitle}
						</p>
					</div>
					<div className={styles.buttons}>
						{data.data.data.attributes.buttons &&
							data.data.data.attributes.buttons.length > 0 &&
							data.data.data.attributes.buttons.map((link, index) => (
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
		</header>
	);
};
