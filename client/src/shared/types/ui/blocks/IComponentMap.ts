import type { IAccordionBlockProps } from './IAccordionBlockProps';
import { ICollectDataFormBlockProps } from './ICollectDataFormBlockProps';
import type { ITeamBlockProps } from './ITeamBlockProps';
import type { ITitleWithButtonsProps } from './ITitleWithButtons';

export interface IComponentMap {
	[key: string]: React.ComponentType<any>;
}
export interface IComponentProps {
	data:
		| ITitleWithButtonsProps
		| IAccordionBlockProps
		| ITeamBlockProps
		| ICollectDataFormBlockProps;
}
