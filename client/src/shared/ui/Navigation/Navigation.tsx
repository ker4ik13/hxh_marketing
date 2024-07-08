'use client';

import { appLinks } from '@/shared';
import { Logo } from '@/shared/ui';
import Link from 'next/link';
import { useRef } from 'react';
import styles from './Navigation.module.scss';

interface NavProps {}

export const Navigation = ({}: NavProps) => {
	const nav = useRef<HTMLDivElement>(null);
	return (
		<nav className={styles.nav} ref={nav}>
			<div className={styles.container}>
				<Logo />
				<ul className={styles.pages}>
					<li className={`${styles.navPageLink} ${styles.active}`}>
						<Link href={appLinks.user.main}>Главная</Link>
					</li>
					<li className={styles.navPageLink}>
						<Link href={appLinks.user.main}>О нас</Link>
					</li>
					<li className={styles.navPageLink}>
						<Link href={appLinks.user.main}>Услуги</Link>
					</li>
					<li className={styles.navPageLink}>
						<Link href={appLinks.user.main}>Отзывы</Link>
					</li>
					<li className={styles.navPageLink}>
						<Link href={appLinks.user.main}>Кейсы</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
