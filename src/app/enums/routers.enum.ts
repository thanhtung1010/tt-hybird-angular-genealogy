import { IMenuItem } from 'common-service';

export const ROUTE = {
    HOME: '',

    GENEALOGY: 'genealogy',
    FAMILY: 'family',

    AUTH: 'auth',
    LOGIN: '',
    LOGOUT: 'log-out',

    NOT_FOUND: '404',
    NO_PERMISSION: '403',
};

export const ROUTE_ICON = {
    MAIN: 'home',
    COMMON: 'admin-menu',
    CHILD_MENU: 'direction-right',
};

export const MENU: Array<IMenuItem> = [
    {
        title: 'menu.genealogy',
        label: 'menu.genealogy',
        icon: 'book',
        href: ROUTE.GENEALOGY,
        permission: [],
        children: [],
    },
    {
        title: 'menu.family',
        label: 'menu.family',
        icon: 'team',
        href: ROUTE.FAMILY,
        permission: [],
        children: [],
    },
];
