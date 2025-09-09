export type IconName =
    | 'Dashboard'
    | 'Board'
    | 'User'
    | 'Settings'
    | 'Calendar'
    | 'Notification'
    | 'Search'
    | 'Info'
    | 'LogOutCircle'
    | 'ChatCircle'
    | 'ArrowUp'
    | 'DownArrow'
    | 'Add'
    | 'Edit'

export interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
    onClick?: React.MouseEventHandler<SVGElement>;
}
