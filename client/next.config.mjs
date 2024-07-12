/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
				hostname: process.env.NEXT_PUBLIC_API_HOSTNAME,
			},
			{
				protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
				hostname: '*',
			},
		],
	},
	experimental: {
		scrollRestoration: false,
		optimizeCss: process.env.NODE_ENV === 'production' ? true : false,
	},
};

export default nextConfig;
