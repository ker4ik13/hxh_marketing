import { ANIMATION_CLASSES } from '@/shared/constants';
import type { IAnimationDirection } from '@/shared/types/ui/shared';

export const getAnimationStyle = (direction?: IAnimationDirection): string => {
	switch (direction) {
		case 'from-left-to-right':
			return `${ANIMATION_CLASSES.animationBlock} ${ANIMATION_CLASSES.direction['from-left-to-right']}`;
		case 'from-right-to-left':
			return `${ANIMATION_CLASSES.animationBlock} ${ANIMATION_CLASSES.direction['from-right-to-left']}`;
		case 'from-top-to-bottom':
			return `${ANIMATION_CLASSES.animationBlock} ${ANIMATION_CLASSES.direction['from-top-to-bottom']}`;
		case 'from-bottom-to-top':
			return `${ANIMATION_CLASSES.animationBlock} ${ANIMATION_CLASSES.direction['from-bottom-to-top']}`;
		default:
			return `${ANIMATION_CLASSES.animationBlock} ${ANIMATION_CLASSES.direction['from-bottom-to-top']}`;
	}
};
