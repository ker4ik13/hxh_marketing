// 09.07.2024 / v.1.0.0

import { toggleBodyOverflow } from '@/shared/helpers/lib';

interface HandleNav {
	burger: React.RefObject<HTMLDivElement>;
	styles: {
		readonly [key: string]: string;
	};
	options: {
		overflowClass: string;
		blur?: {
			enabled: boolean;
			class: string;
			delay: number;
		};
	};
}

// Вызов меню бургера
export const handleNav = ({ burger, options, styles }: HandleNav) => {
	// Получение контейнера для отслеживания клика вне него
	const container: HTMLDivElement | null = document.querySelector(
		`.${styles.container}`,
	);
	const navPages: HTMLDivElement | null = document.querySelector(
		`.${styles.pages}`,
	);

	burger.current?.classList.toggle(styles.active);
	navPages?.classList.toggle(styles.active);

	if (document.body.classList.contains(options.overflowClass)) {
		toggleBodyOverflow({
			action: 'remove',
			overflowClass: options.overflowClass,
			blur: options.blur,
		});
	} else {
		toggleBodyOverflow({
			action: 'add',
			overflowClass: options.overflowClass,
			blur: options.blur,
		});
	}

	// Все страницы
	const navLinks = document.querySelectorAll(`.${styles.navPageLink}`);

	document.body.addEventListener('click', (event) => {
		if (burger.current && event.composedPath().includes(burger.current)) {
			return;
		}
		if (container && !event.composedPath().includes(container)) {
			burger.current?.classList.remove(styles.active);
			// Если включен блюр
			toggleBodyOverflow({
				action: 'remove',
				overflowClass: options.overflowClass,
				blur: options.blur,
			});
			navPages?.classList.remove(styles.active);
			return;
		}
	});

	// Закрытие бургера при клике на любую страницу
	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			if (burger.current) {
				burger.current.classList.remove(styles.active);
				toggleBodyOverflow({
					action: 'remove',
					overflowClass: options.overflowClass,
					blur: options.blur,
				});
				navPages?.classList.remove(styles.active);
			}
		});
	});
};
