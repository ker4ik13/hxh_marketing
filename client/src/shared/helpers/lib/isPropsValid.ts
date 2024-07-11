// 11.07.2024 / v.1.0.1

import { TelegramService } from '@/services/user/messages';
import type { IComponentProps } from '@/shared/types/ui/blocks';

// Функция проверяет пропсы на валидность
export const isPropsValid = <T extends IComponentProps>(
	props: any,
	propType: T,
): props is T => {
	if (!propType.data.data || !propType.data.data.data) {
		TelegramService.sendNotPublishedBlock(propType.data.blockName);
		return false;
	}

	return Object.keys(propType).every((key) => key in props);
};
