'use client';

import type { INavigation, INewsMessages } from '@/shared/types/ui/elements';
import { Logo, NewsMessages } from '@/shared/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import styles from './Navigation.module.scss';
import { handleNav } from './handleNav';

interface NavProps {
	data: INavigation;
	news?: INewsMessages;
	options?: {
		hideByHeight: boolean;
		scrollHeight: number;
	};
}

export const Navigation = ({
	data,
	news,
	options = {
		hideByHeight: false,
		scrollHeight: 300,
	},
}: NavProps) => {
	const nav = useRef<HTMLDivElement>(null);
	const burger = useRef<HTMLDivElement>(null);
	const path = usePathname();

	const isActivePath = (linkHref: string): string => {
		if (linkHref === '/') {
			return path === linkHref ? styles.active : '';
		}

		return path.startsWith(linkHref) ? styles.active : '';
	};

	const hiddenScroll = (options: { height: number }) => {
		// Добавление класса при прокрутке height
		const scroll = window.scrollY;
		if (scroll <= options.height) {
			nav.current?.classList.add(styles.transparentBg);
		} else {
			nav.current?.classList.remove(styles.transparentBg);
		}
	};

	useEffect(() => {
		if (options.hideByHeight) {
			if (news && news.attributes.messages) {
				window.addEventListener('scroll', () => {
					hiddenScroll({ height: options.scrollHeight + 50 });
				});

				return () => {
					window.removeEventListener('scroll', () => {
						hiddenScroll({ height: options.scrollHeight + 50 });
					});
				};
			}
			window.addEventListener('scroll', () => {
				hiddenScroll({ height: options.scrollHeight });
			});

			return () => {
				window.removeEventListener('scroll', () => {
					hiddenScroll({ height: options.scrollHeight });
				});
			};
		}
	}, [path]);

	return (
		<>
			{news && news.attributes.messages && <NewsMessages data={news} />}
			<nav
				className={`${styles.nav} ${news && news.attributes.messages ? styles.withNews : ''} ${options.hideByHeight ? styles.transparentBg : ''}`}
				ref={nav}
			>
				<div className={styles.container}>
					<Logo logo={data.attributes.logo} className={styles.logo} />
					{/* TODO: поменять на <menu> + outline up */}
					<ul className={styles.pages}>
						{data.attributes.links.map((link) => (
							<li
								className={`${styles.navPageLink} ${isActivePath(link.href)}`}
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
