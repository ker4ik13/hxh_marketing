import type { IComponentMap, IComponentProps } from '@/shared/types/ui/blocks';
import {
	AccordionBlock,
	TeamBlock,
	TitleWithButtons,
} from '@/widgets/ui/blocks';
import { isPropsValid } from './isPropsValid';

const components: IComponentMap = {
	'title-with-buttons': TitleWithButtons,
	'accordion-block': AccordionBlock,
	'team-block': TeamBlock,
};

export const getComponentFromBlockName = (
	blockName: keyof typeof components,
	props: IComponentProps,
	index: number,
): React.ReactNode | null => {
	const Component = components[blockName];
	if (Component) {
		if (isPropsValid(props, props)) {
			return <Component {...props} key={index} />;
		} else {
			console.error(`Invalid props for block "${blockName}"`);
			return null;
		}
	} else {
		console.error(`Unknown block "${blockName}"`);
		return null;
	}
};
