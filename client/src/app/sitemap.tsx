import { MetaService } from '@/services/user/meta';
import { CLIENT_URL } from '@/shared/constants';
import type { MetadataRoute } from 'next';

// sitemap.xml / v.1.0.1

export default async function sitemap() {
	const allPages = await MetaService.getAllPages();
	// Все страницы
	const routes: MetadataRoute.Sitemap = allPages.data.map((page) => ({
		url: `${CLIENT_URL}${page.attributes.path}`,
		lastModified: page.attributes.updatedAt
			? new Date(page.attributes.updatedAt).toISOString()
			: new Date(page.attributes.createdAt).toISOString(),
		priority: 1.0,
	}));

	// Все статьи
	// const articles = await ArticleService.getAllArticles({
	// 	limit: 100,
	// });
	// const articlesRoutes: MetadataRoute.Sitemap = [];

	// if (articles.data) {
	// 	articles.data.data.forEach((article) => {
	// 		const url = `${CLIENT_URL}${appLinks.user.articles.bySlug(
	// 			article.attributes.slug,
	// 		)}`;
	// 		articlesRoutes.push({ url, lastModified: article.attributes.updatedAt });
	// 	});
	// }

	// Все категории
	// const categories = await SortService.getSortFields('articles-api');
	// const typesRoutes: MetadataRoute.Sitemap = [];

	// const lastArticlesByTypes: IArticle[] = [];

	// if (categories && categories.length) {
	// Получаем последние статьи по каждому типу

	// categories.forEach(async (type) => {
	//   const lastArticleByType = await ArticleService.getLastArticleByType(
	//     type.attributes.type
	//   );

	//   if (!lastArticleByType || lastArticleByType.data.length === 0) {
	//     return;
	//   }

	//   lastArticlesByTypes.push(lastArticleByType.data[0]);
	// });

	// categories.forEach((type) => {
	// 	// const articleByCurrentType = lastArticlesByTypes.find(
	// 	//   (article) => article.attributes.type === type.attributes.type
	// 	// );

	// 	const url = `${CLIENT_URL}${appLinks.user.articles.byType(
	// 		type.attributes.type,
	// 	)}`;
	// 	typesRoutes.push({
	// 		url,
	// 		priority: 1,
	// 		// lastModified: articleByCurrentType?.attributes.updatedAt,
	// 	});
	// });
	// }

	return [...routes];
}
