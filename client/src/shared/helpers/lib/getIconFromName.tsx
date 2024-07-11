import { IIcons } from '@/shared/types/ui/shared';
import {
	ArrowIcon,
	BehanceIcon,
	GitHubIcon,
	HabrIcon,
	InstagramIcon,
	OkIcon,
	SendIcon,
	TelegramIcon,
	VkIcon,
	WebsiteIcon,
	WhatsAppIcon,
} from '@/shared/ui/icons';

const Icons = {
	Instagram: InstagramIcon,
	Telegram: TelegramIcon,
	VK: VkIcon,
	WhatsApp: WhatsAppIcon,
	Behance: BehanceIcon,
	OK: OkIcon,
	GitHub: GitHubIcon,
	Habr: HabrIcon,
	Website: WebsiteIcon,
	Arrow: ArrowIcon,
	Send: SendIcon,
};

// 11.07.2024 / v.1.0.0
// Функция для получения иконки по имени
export const getIconFromName = (
	name: IIcons,
	className?: string,
): React.ReactNode => {
	const Icon = Icons[name];
	if (Icon) {
		return <Icon className={className} />;
	}

	const DefaultIcon = Icons['Website'];
	return <DefaultIcon className={className} />;
};
