// import favicon128 from '@/data/images/favicon/favicon-128x128.png';
// import favicon32 from '@/data/images/favicon/favicon-32x32.png';
// import favicon64 from '@/data/images/favicon/favicon-64x64.png';
// import faviconSvg from '@/data/images/favicon/favicon.svg';
// import poster from '@/data/user/source/Header.jpg';
import { NavigationService } from '@/services/user/layout';
import { REVALIDATE_TIME } from '@/shared';
import { Navigation } from '@/shared/ui';
import type { Metadata } from 'next';
import './styles';

export const revalidate = REVALIDATE_TIME;

export const metadata: Metadata = {
	creator: 'HxH Marketing',
	// icons: [
	// 	{
	// 		url: faviconSvg.src,
	// 		type: 'image/svg+xml',
	// 		sizes: '32x32',
	// 	},
	// 	{
	// 		url: favicon32.src,
	// 		type: 'image/png',
	// 		sizes: '32x32',
	// 	},
	// 	{
	// 		url: favicon64.src,
	// 		type: 'image/png',
	// 		sizes: '64x64',
	// 	},
	// 	{
	// 		url: favicon128.src,
	// 		type: 'image/png',
	// 		sizes: '128x128',
	// 	},
	// ],
	// openGraph: {
	// 	images: [poster.src],
	// },
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Get default info
	const navigation = await NavigationService.getNavigation();
	const newsMessages = await NavigationService.getNewsMessages();
	return (
		<html lang='ru'>
			<meta name='color-scheme' content='only dark' />
			<meta
				name='theme-color'
				media='(prefers-color-scheme: light)'
				content='141414'
			/>
			<meta
				name='theme-color'
				media='(prefers-color-scheme: dark)'
				content='141414'
			/>
			<body>
				<Navigation data={navigation.data} news={newsMessages.data} />
				<main>{children}</main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
