import bgHeaderImage from '@/data/user/images/Bg image header.png';
import type { MainScreenProps } from '@/shared/types/ui/blocks';
import { CustomButton } from '@/shared/ui';
import Image from 'next/image';
import styles from './MainScreen.module.scss';

export const MainScreen = ({ links, subtitle, title }: MainScreenProps) => {
	return (
		<header className={styles.mainScreen}>
			<Image
				className={styles.bgImage}
				src={bgHeaderImage}
				alt={''}
				width={1920}
				height={1080}
			/>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.titleWrapper}>
						<h1 className={styles.title}>{title ? title : 'Design & Sites'}</h1>
						<p className={styles.subtitle}>
							{subtitle
								? subtitle
								: 'Современное маркетинговое агенство, занимающееся улучшением и продвижением бизнесов.'}
						</p>
					</div>
					<div className={styles.buttons}>
						{links && links.length ? (
							links.map((link, index) => (
								<div key={index}>
									<CustomButton.Link
										size='large'
										color={link.color}
										href={link.href}
									>
										{link.children}
									</CustomButton.Link>
								</div>
							))
						) : (
							<>
								<div>
									<CustomButton.Link size='large' href='/'>
										Получить консультацию
									</CustomButton.Link>
								</div>
								<div>
									<CustomButton.Link size='large' color='secondary' href='/'>
										Проекты
									</CustomButton.Link>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};
