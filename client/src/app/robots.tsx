import { appLinks, CLIENT_URL } from '@/shared/constants';
import type { MetadataRoute } from 'next';

// robots.txt / v.1.0.0
export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: [`${appLinks.user.main}`],
				disallow: [`${appLinks.user.main}*?*`],
			},
		],
		sitemap: `${CLIENT_URL}/sitemap.xml`,
	};
}
