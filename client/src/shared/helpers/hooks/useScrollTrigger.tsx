'use client';

import { useEffect } from 'react';

/**
 * useScrollTrigger
 *
 * Добавляет или удаляет CSS-класс для элементов при скролле.
 *
 * @param className - класс элементов, для которых будет отслеживаться скролл
 * @param visibleClass - класс, который будет добавляться/удаляться при достижении условий
 * @param offset - смещение от нижней границы окна просмотра (по умолчанию 30 пикселей)
 */
export const useScrollTrigger = (
	className: string,
	visibleClass: string,
	offset: number = 30,
) => {
	// const pathname = useRouter();

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, [pathname]);

	useEffect(() => {
		const handleScroll = () => {
			const elements = document.querySelectorAll(`.${className}`);
			elements.forEach((element) => {
				// if (element instanceof HTMLElement) {
				const rect = element.getBoundingClientRect();
				const adjustedBottom = window.innerHeight - offset;

				if (rect.top <= adjustedBottom) {
					element.classList.add(visibleClass);
				} else if (rect.top > adjustedBottom) {
					element.classList.remove(visibleClass);
				}
				// }
			});
		};

		window.addEventListener('scroll', handleScroll);

		// Проверяем начальную позицию элементов в следующем кадре анимации
		requestAnimationFrame(handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [className, visibleClass, offset]);
};
