export interface ILink {
	id: number;
	label: string;
	href: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
}
