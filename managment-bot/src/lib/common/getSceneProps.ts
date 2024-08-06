import type { DefaultSceneProps } from '../types';

export const getSceneProps = <DefaultSceneObjectProps>({
  sceneId,
  initialState,
}: DefaultSceneProps<DefaultSceneObjectProps>): DefaultSceneProps<DefaultSceneObjectProps> => {
  return { sceneId, initialState };
};
