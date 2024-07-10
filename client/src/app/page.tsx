import { PageService } from '@/services/user';
import { getComponentFromBlockName } from '@/shared/helpers/lib';
import type { ITitleWithButtons } from '@/shared/types/ui/blocks';

const defaultProps: ITitleWithButtons = {
	blockName: 'title-with-buttons',
	id: 1,
	title: 'Design & Sites',
	buttons: [
		{
			children: 'Получить консультацию',
			href: '/',
			color: 'primary',
			size: 'large',
		},
		{
			children: 'Проекты',
			href: '/',
			color: 'secondary',
			size: 'large',
		},
	],
};

const MainPage = async () => {
	const pageData = await PageService.getPageData('/');
	return (
		<>
			<title>{pageData.data[0].attributes.metaTitle}</title>
			<meta
				name='description'
				content={pageData.data[0].attributes.metaDescription}
			/>
			<meta
				name='keywords'
				content={pageData.data[0].attributes.metaKeywords}
			/>
			{pageData.data[0] &&
				pageData.data[0].attributes.blocks &&
				pageData.data[0].attributes.blocks.map((block) =>
					getComponentFromBlockName(block.blockName, {
						data: block,
					}),
				)}
		</>
	);
};

export default MainPage;
