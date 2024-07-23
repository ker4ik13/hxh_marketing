'use client';

import { YandexMetricaWrapper } from '@/shared/helpers/lib/metrics';
import type {
	IFooter,
	INavigation,
	INewsMessages,
} from '@/shared/types/ui/elements';
import { Footer, Navigation } from '@/shared/ui';

interface ClientLayoutProps {
	children: React.ReactNode;
	navProps: INavigation;
	newsProps: INewsMessages;
	footerProps: IFooter;
}

export const ClientRootLayout = ({
	children,
	footerProps,
	navProps,
	newsProps,
}: ClientLayoutProps) => {
	return (
		<body>
			<YandexMetricaWrapper>
				<Navigation
					data={navProps}
					news={newsProps}
					options={{
						hideByHeight: true,
						scrollHeight: 30,
					}}
				/>
				<main className='main'>{children}</main>
				<Footer data={footerProps} />
			</YandexMetricaWrapper>
		</body>
	);
};
