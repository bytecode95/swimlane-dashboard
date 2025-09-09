import { MenuSection } from '@/theme/types';
import { BaseIcon } from '../components/base-icon/BaseIcon';
import { APP_PRIVATE_ROUTES } from '../constants/app.route';

export const menuSections: MenuSection[] = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        icon: <BaseIcon name="Dashboard" size={20} />,
        path: APP_PRIVATE_ROUTES.DASHBOARD,
    },
    {
        key: 'boards',
        label: 'Boards',
        icon: <BaseIcon name="Board" size={20} />,
        children: [
            {
                key: 'create-routes',
                label: 'Create Routes',
                path: APP_PRIVATE_ROUTES.CREATE_ROUTES,
            },
            {
                key: 'development-react-app',
                label: 'Development React App',
                path: APP_PRIVATE_ROUTES.DEVELOPMENT_REACT_APP,
            },
            {
                key: 'sport-xi-project',
                label: 'Sport Xi Project',
                path: APP_PRIVATE_ROUTES.SPORT_XI_PROJECT,
            },
            {
                key: 'word-press-theme',
                label: 'WordPress Theme',
                path: APP_PRIVATE_ROUTES.WORD_PRESS_THEME,
            },
        ],
    },
    {
        key: 'messages',
        label: 'Messages',
        icon: <BaseIcon name="ChatCircle" size={20} />,
        path: APP_PRIVATE_ROUTES.MESSAGES,
    },
    {
        key: 'calendar',
        label: 'Calendar',
        icon: <BaseIcon name="Calendar" size={20} />,
        path: APP_PRIVATE_ROUTES.CALENDAR,
    },
    {
        key: 'team-members',
        label: 'Team Members',
        icon: <BaseIcon name="User" size={20} />,
        path: APP_PRIVATE_ROUTES.TEAM_MEMBERS,
    },
];
