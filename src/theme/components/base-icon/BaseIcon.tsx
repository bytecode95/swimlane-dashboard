'use client';

import { IconName, IconProps } from '@/theme/constants';
import {
    RiAddLine,
    RiArrowDropDownLine,
    RiArrowDropUpLine,
    RiCalendarLine,
    RiChat3Line,
    RiDashboardLine,
    RiEditLine,
    RiFolderLine,
    RiInformationLine,
    RiLogoutCircleLine,
    RiNotification2Line,
    RiSearchLine,
    RiSettings2Line,
    RiUserLine,
} from '@remixicon/react';
import type { ComponentType } from 'react';

const iconMap: Record<IconName, ComponentType<IconProps>> = {
    Dashboard: RiDashboardLine,
    Board: RiFolderLine,
    User: RiUserLine,
    Settings: RiSettings2Line,
    Calendar: RiCalendarLine,
    Notification: RiNotification2Line,
    Search: RiSearchLine,
    Info: RiInformationLine,
    LogOutCircle: RiLogoutCircleLine,
    ChatCircle: RiChat3Line,
    ArrowUp: RiArrowDropUpLine,
    DownArrow: RiArrowDropDownLine,
    Add: RiAddLine,
    Edit: RiEditLine,
};

interface IconComponentProps extends IconProps {
    name: IconName;
    style?: React.CSSProperties;
}

export const BaseIcon = ({
    name,
    size = 18,
    color = 'var(--color-text-neutral4)',
    className,
    onClick,
}: IconComponentProps) => {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;
    const combinedClassName = [className, onClick ? 'cursor-pointer' : ''].filter(Boolean).join(' ');
    return <IconComponent size={size} color={color} className={combinedClassName} onClick={onClick} />;
};
