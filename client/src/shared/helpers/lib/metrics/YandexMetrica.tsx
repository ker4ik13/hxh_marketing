import { YANDEX_METRIKA } from '@/shared/constants';
import { YandexMetrikaWrapper } from '@hxhcore/react';

interface YandexMetricaProps {
	children: React.ReactNode;
}

// 19.07.2024 / v.1.0.0
// Компонент для установки Яндекс Метрики
export const YandexMetricaWrapper = ({ children }: YandexMetricaProps) => {
	if (process.env.NODE_ENV === 'production') {
		return (
			<YandexMetrikaWrapper
				options={{
					tagID: YANDEX_METRIKA,
					initParameters: {
						accurateTrackBounce: true,
						clickmap: true,
						trackLinks: true,
						webvisor: true,
					},
				}}
			>
				{children}
			</YandexMetrikaWrapper>
		);
	}

	return <>{children}</>;
};
