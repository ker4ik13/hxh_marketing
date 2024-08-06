import type { Site } from '@prisma/client';

export type DefaultSceneObjectProps<T = void> = T;

export interface DefaultSceneProps<DefaultSceneObjectProps> {
  sceneId: string;
  initialState?: DefaultSceneObjectProps;
}

export interface SiteSceneProps {
  site: Site;
}
export interface ChooseSiteSceneProps {
  showHello?: boolean;
  firstMessage: 'edit' | 'reply';
}
export interface MenuSceneProps {
  firstMessage: 'edit' | 'reply';
}
