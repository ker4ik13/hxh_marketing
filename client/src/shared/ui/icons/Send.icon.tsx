import type { IconType } from '@/shared/types/ui/shared';

export const SendIcon = ({ className }: IconType) => {
	return (
		<svg
			viewBox='0 0 30 24'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M0.0225412 22.7917C-0.141955 23.5707 0.625559 24.2201 1.3666 23.929L29.3655 12.9299C30.2113 12.5976 30.2113 11.4007 29.3655 11.0684L1.37045 0.0707825C0.628625 -0.220636 -0.139345 0.430454 0.0267705 1.20996L1.55779 8.39435C1.64598 8.80818 1.98507 9.12171 2.40452 9.17727L16.2263 11.008C17.3846 11.1614 17.3846 12.8373 16.2263 12.9907L2.38649 14.8238C1.96636 14.8794 1.62693 15.1939 1.53937 15.6085L0.0225412 22.7917Z'
				fill='white'
			/>
		</svg>
	);
};
