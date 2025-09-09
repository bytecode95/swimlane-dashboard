'use client';

import React from 'react';
import Link from 'next/link';
import { menuSections } from '@/theme/config/menu.config';
import AppLogo from './AppLogo';
import SidebarNavItem from './SidebarNavItems';
import BaseButton from '../base-button/BaseButton';
import { BaseIcon } from '../base-icon/BaseIcon';
import clsx from 'clsx';

interface SidebarProps {
    collapsed: boolean;
    onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
    return (
        <aside
            className={clsx(
                'bg-white z-20 h-screen flex flex-col justify-between border-r border-[color:var(--color-text-neutral8)] transition-all duration-300 relative',
                collapsed ? 'w-20' : 'md:w-52 2xl:w-64'
            )}
        >
            <div className="flex items-center justify-center h-20 px-4">
                <AppLogo collapsed={collapsed} />
            </div>
            <div className="absolute -right-4 top-20 transform -translate-y-1/2 z-20">
                <BaseButton
                    onClick={onToggle}
                    iconName={collapsed ? 'Collapsed' : 'Expand'}
                    fullWidth={false}
                    className="!p-2 rounded-l-md"
                />
            </div>
            <div className="flex flex-col justify-between flex-1 p-2">
                <nav className="mt-2 space-y-2">
                    {menuSections.map(item => (
                        <SidebarNavItem key={item.key} item={item} collapsed={collapsed} />
                    ))}
                </nav>

                <div className="!p-2">
                    <Link
                        href="/support"
                        className="flex items-center gap-2 rounded-md !p-2 text-[var(--color-text-neutral4)] hover:bg-gray-100"
                    >
                        <BaseIcon name="Info" />
                        {!collapsed && <span>Support</span>}
                    </Link>
                    <BaseButton
                        text={collapsed ? '' : 'Logout'}
                        iconName="LogOutCircle"
                        bgColor="var(--color-text-neutral3)"
                        textColor="#fff"
                        fullWidth={true}
                        className="!p-3 text-start !mt-2"
                    />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
