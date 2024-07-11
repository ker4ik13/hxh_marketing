export interface ITitle {
	label: string;
	link?: {
		label: string;
		href: string;
		target?: '_blank' | '_self' | '_parent' | '_top';
	};
}
