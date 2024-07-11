import { PageService } from '@/services/user';
import { getComponentFromBlockName } from '@/shared/helpers/lib';
import { notFound } from 'next/navigation';

const SlugPage = async ({ params }: { params: { slug: string } }) => {
	console.log(`slug: ${params.slug}`);
	const pageData = await PageService.getPageData(
		params.slug === 'favicon.ico' || params.slug === ''
			? '/'
			: `/${params.slug}`,
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
		</>
	);
};

export default SlugPage;
