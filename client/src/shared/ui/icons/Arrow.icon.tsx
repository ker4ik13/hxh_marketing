import type { IconType } from '@/shared/types/ui/shared';

export const ArrowIcon = ({ className }: IconType) => {
	return (
		<svg
			viewBox='0 0 14 15'
			className={className}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M3 1.5H13V11.5M13 1.5L1 13.5L13 1.5Z'
				stroke='#F7F7F7'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
