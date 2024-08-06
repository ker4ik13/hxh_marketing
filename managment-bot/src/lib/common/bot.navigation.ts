import { MenuSceneProps } from '../types';
import { getSceneProps } from './getSceneProps';

// Navigation:
// enter
// exit
// regex
//

export const BotNavigation = {
  user: {
    commands: {
      start: '/start',
      menu: '/menu',
    },
    scenes: {
      start: 'start',
      site: {
        create: {
          enter: 'site-create',
          goToStep: (step: number) => `site-create-step|${step}`,
          skipWriteUrl: 'site-create-skip-url',
          exit: 'site-create-exit',
          isAvailable: 'site-create-available',
          isUnavailable: 'site-create-unavailable',
          checkCurrentSite: (id: number) => `site-current-check|${id}`,
        },
        rename: {
          enter: 'site-rename',
          byId: (id: number) => `site-rename|${id}`,
          exit: 'site-rename-exit',
        },
        choose: {
          enter: 'site-choose',
          byId: (id: number) => `site-choose|${id}`,
          exit: 'site-choose-exit',
        },
        // Change url
        changeUrl: {
          enter: 'site-change-url',
          exit: 'site-change-url-exit',
          byId: (id: number) => `site-change-url|${id}`,
        },
        changeAvailable: (id: number) => `site-change-available|${id}`,
        // Current site
        current: {
          enter: 'site-current',
          exit: 'site-current-exit',
        },
        delete: {
          enter: 'site-delete',
          byId: (id: number) => `site-delete|${id}`,
          yesDelete: (id: number) => `site-delete-yes|${id}`,
          exit: 'site-delete-exit',
        },
      },
      menu: {
        enter: 'menu',
        exit: 'menu-exit',
      },
    },
  },
  admin: {
    commands: {
      users: '/users',
    },
  },
};

export const BotRoutes = {
  user: {
    start: {
      value: 'menu',
    },
    site: {
      choose: {
        value: 'site-choose',
        regex: /site-choose\|(\d+)/,
        exit: {
          value: 'site-choose-exit',
        },
      },
      current: {
        value: 'site-current',
        check: {
          regex: /site-current-check\|(\d+)/,
        },
        exit: {
          value: 'site-current-exit',
        },
      },
      create: {
        value: 'site-create',
        step: {
          value: (step: number) => `site-create-step|${step}`,
          regex: /site-create-step\|(\d+)/,
        },
        skipUrl: {
          value: 'site-create-skip-url',
        },
        available: {
          value: 'site-create-available',
        },
        unavailable: {
          value: 'site-create-unavailable',
        },
        exit: {
          value: 'site-create-exit',
        },
      },
      changeAvailable: {
        value: (id: number) => `site-change-available|${id}`,
        regex: /site-change-available\|(\d+)/,
      },
      changeUrl: {
        value: 'site-change-url',
        regex: /site-change-url\|(\d+)/,
        exit: {
          value: 'site-change-url-exit',
        },
      },
      rename: {
        value: 'site-rename',
        regex: /site-rename\|(\d+)/,
        exit: {
          value: 'site-rename-exit',
        },
      },
      delete: {
        value: 'site-delete',
        regex: /site-delete\|(\d+)/,
        yes: {
          value: 'site-delete-yes',
          regex: /site-delete-yes\|(\d+)/,
        },
        exit: {
          value: 'site-delete-exit',
        },
      },
    },
    menu: {
      value: 'menu',
      exit: {
        value: 'menu-exit',
      },
    },
  },
};

export const BotScenes = {
  user: {
    start: 'start',
    menu: (initialState?: MenuSceneProps) =>
      getSceneProps<MenuSceneProps>({
        sceneId: BotRoutes.user.menu.value,
        initialState: initialState
          ? initialState
          : {
              firstMessage: 'reply',
            },
      }),
  },
  admin: {},
};
