import { MainScreen, MainScreenProps } from '@/widgets/ui/blocks';

interface ComponentMap {
	[key: string]: React.ComponentType<any>;
}
type PropsMap = {
	[key: string]: any;
};

type ComponentProps = {
	data: MainScreenProps | any;
};

const components: ComponentMap = {
	'title-with-buttons': MainScreen,
};

const isPropsValid = <T extends {}>(props: any, propType: T): props is T => {
	return Object.keys(propType).every((key) => key in props);
};

export const getComponentFromBlockName = (
	blockName: keyof typeof components,
	props: ComponentProps,
): React.ReactNode | null => {
	const Component = components[blockName];
	if (Component) {
		if (isPropsValid(props, props)) {
			return <Component {...props} />;
		} else {
			console.error(`Invalid props for block "${blockName}"`);
			return null;
		}
	} else {
		console.error(`Unknown block "${blockName}"`);
		return null;
	}
};
