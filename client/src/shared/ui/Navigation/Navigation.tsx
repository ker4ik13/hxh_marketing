'use client';

import type { INavigation, INewsMessages } from '@/shared/types/ui/elements';
import { Logo, NewsMessages } from '@/shared/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import styles from './Navigation.module.scss';
import { handleNav } from './handleNav';

interface NavProps {
	data: INavigation;
	news?: INewsMessages;
}

export const Navigation = ({ data, news }: NavProps) => {
	const nav = useRef<HTMLDivElement>(null);
	const burger = useRef<HTMLDivElement>(null);

	const path = usePathname();

	return (
		<>
			{news && news.attributes.messages && <NewsMessages data={news} />}
			<nav
				className={`${styles.nav} ${news && news.attributes.messages ? styles.withNews : ''}`}
				ref={nav}
			>
				<div className={styles.container}>
					<Logo logo={data.attributes.logo} />
					<ul className={styles.pages}>
						{data.attributes.links.map((link) => (
							<li
								className={`${styles.navPageLink} ${path === link.href ? styles.active : ''}`}
								key={link.id}
							>
								<Link target={link.target} href={link.href}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<div
						ref={burger}
						className={styles.burger}
						onClick={() => {
							handleNav({
								burger,
								options: {
									overflowClass: 'overflow',
									blur: {
										enabled: true,
										class: 'blur',
										delay: 100,
									},
								},
								styles,
							});
						}}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</nav>
		</>
	);
};
