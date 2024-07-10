// Интерфейс для изображений со Strapi
export interface StrapiImage {
	data: {
		id: number;
		attributes: {
			name: string;
			alternativeText?: string;
			caption?: string;
			width: number;
			height: number;
			url: string;
			size: number;
			mime: string; // Тип файла (image/jpeg)
			hash: string;
			ext: string; // Расширение файла (.jpeg)
			previewUrl?: string;
			provider?: string;
			provider_metadata?: string;
			createdAt: string;
			updatedAt?: string;
			formats: {
				large: StrapiImageFormat;
				small: StrapiImageFormat;
				medium: StrapiImageFormat;
				thumbnail: StrapiImageFormat;
			};
		};
	};
}

export interface StrapiImageFormat {
	ext: string; // Расширение файла (.jpeg)
	url: string;
	hash: string;
	mime: string; // Тип файла (image/jpeg)
	name: string;
	path?: string;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
}
