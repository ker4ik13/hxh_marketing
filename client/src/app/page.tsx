import { PageService } from '@/services/user';
import { getComponentFromBlockName } from '@/shared/helpers/lib';
import { CollectForm } from '@/widgets/ui/blocks';

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
				pageData.data[0].attributes.blocks.map((block, index) =>
					getComponentFromBlockName(
						block.blockName,
						{
							data: block,
						},
						index,
					),
				)}
			<CollectForm />
		</>
	);
};

export default MainPage;
