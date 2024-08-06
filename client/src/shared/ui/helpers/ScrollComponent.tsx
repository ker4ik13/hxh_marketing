'use client';

import { ANIMATION_CLASSES } from '@/shared/constants';
import { useScrollTrigger } from '@/shared/helpers/hooks';

interface Props {
	children?: React.ReactNode;
}

export const ScrollComponent = ({ children }: Props) => {
	// useScrollTrigger({
	// 	className: ANIMATION_CLASSES.animationBlock,
	// 	visibleClass: ANIMATION_CLASSES.animationBlockActive,
	// });
	useScrollTrigger(
		ANIMATION_CLASSES.animationBlock,
		ANIMATION_CLASSES.animationBlockActive,
	);

	return <>{children}</>;
};
