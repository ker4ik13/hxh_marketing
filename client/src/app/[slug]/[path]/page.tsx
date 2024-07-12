import { PageService } from '@/services/user';
import { getComponentFromBlockName } from '@/shared/helpers/lib';
import { ScrollComponent } from '@/shared/ui/helpers';
import { notFound } from 'next/navigation';

const SlugPage = async ({
	params,
}: {
	params: { path: string; slug: string };
}) => {
	console.log(`path: ${params.path}`);
	console.log(`slug: ${params.slug}`);
	const pageData = await PageService.getPageData(
		`/${params.slug}/${params.path}`,
	);

	if (!pageData.data[0]) {
		return notFound();
	}

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
			<ScrollComponent>
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
			</ScrollComponent>
		</>
	);
};

export default SlugPage;
