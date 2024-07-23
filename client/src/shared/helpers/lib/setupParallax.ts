interface ParallaxOptions {
	intensity?: number; // Интенсивность эффекта (чем меньше, тем сильнее)
}

// 13.07.2024 / v.1.0.0
// Функция для установки параллакса на элемент в зависимости от курсора мыши
export const setupParallax = (
	elementClass: string,
	event: React.MouseEvent<HTMLElement>,
	options?: ParallaxOptions,
): void => {
	const parallaxImages = document.querySelectorAll(
		`.${elementClass}`,
	) as NodeListOf<HTMLImageElement>;

	if (!parallaxImages) {
		console.error(`Elements with classes '${elementClass}' not found.`);
		return;
	}

	const intensity = options?.intensity;

	parallaxImages.forEach((element) => {
		event.currentTarget.addEventListener('mousemove', (e: MouseEvent) => {
			applyParallaxEffect(element, e, intensity);
		});

		event.currentTarget.addEventListener('mouseleave', () => {
			// Сбрасываем трансформацию при выходе мыши за пределы элемента
			element.style.transform = 'translate3d(0px, 0px, 0px)';
		});
	});
};

function applyParallaxEffect(
	element: HTMLElement,
	event: MouseEvent,
	intensity: number = 20,
): void {
	const rect = element.getBoundingClientRect();
	const centerX = rect.left + rect.width / 2;
	const centerY = rect.top + rect.height / 2;

	const mouseX = event.clientX - centerX;
	const mouseY = event.clientY - centerY;

	const offsetX = mouseX / intensity;
	const offsetY = mouseY / intensity;

	element.style.transform = `translate3d(${-offsetX}px, ${-offsetY}px, 0px) scale(1.05)`;
}
