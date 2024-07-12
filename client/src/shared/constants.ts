export const SITE_NAME = 'HxH Marketing';
export const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL;
export const SERVER_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;
export const SERVER_FILES_DIST = 'uploads';
export const YANDEX_METRIKA = undefined;
export const GOOGLE_ANALYTICS = undefined;
export const MAIN_ARTICLES_COUNT = 4; // Сколько выводить статей на главной странице
export const REVALIDATE_TIME = 10;

// Классы
export const ANIMATION_CLASSES = {
	animationBlock: 'animation-block',
	animationBlockActive: 'show-animation',
	direction: {
		'from-left-to-right': 'from-left-to-right',
		'from-right-to-left': 'from-right-to-left',
		'from-top-to-bottom': 'from-top-to-bottom',
		'from-bottom-to-top': 'from-bottom-to-top',
	},
};

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
