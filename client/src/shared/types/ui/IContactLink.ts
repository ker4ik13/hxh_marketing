export interface IContactLink {
	id: number;
	socialNetwork:
		| 'Instagram'
		| 'Telegram'
		| 'VK'
		| 'WhatsApp'
		| 'Behance'
		| 'OK'
		| 'GitHub'
		| 'Habr'
		| 'Website';
	href: string;
}
