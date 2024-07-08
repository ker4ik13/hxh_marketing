export const SITE_NAME = 'HxH Marketing';
export const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL;
export const SERVER_URL = process.env.NEXT_PUBLIC_API_URL;
export const SERVER_FILES_DIST = 'uploads';
export const YANDEX_METRIKA = undefined;
export const GOOGLE_ANALYTICS = undefined;
export const MAIN_ARTICLES_COUNT = 4; // Сколько выводить статей на главной странице

export const appLinks = {
	user: {
		main: '/',
		articles: {
			main: '/articles',
			bySlug: (slug: string) => `${appLinks.user.articles.main}/${slug}`,
			byType: (type: string) => `${appLinks.user.articles.main}?type=${type}`,
		},
	},
	admin: {
		main: '/admin/',
	},
	contacts: {
		vk: {
			group: 'https://vk.com/hxh_marketing',
			writeMessage: 'https://vk.me/hxh_marketing',
		},
		gmail: {
			mailTo: 'mailto:hxhmarketing@gmail.com',
			mail: 'hxhmarketing@gmail.com',
		},
		yandex: {
			mail: 'hxhmarketing@yandex.ru',
			mailTo: 'mailto:hxhmarketing@yandex.ru',
		},
	},
};
