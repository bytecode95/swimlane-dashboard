import React from 'react';

import { menuSections } from '@/theme/config/menu.config';
import AppLogo from './AppLogo';
import { BaseIcon } from '../base-icon/BaseIcon';
import SidebarNavItem from './SidebarNavItems';
import BaseButton from '../base-button/BaseButton';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    return (
        <aside className="md:w-40 lg:w-52 2xl:w-64 bg-white flex flex-col justify-between h-screen">
            <div className="h-20 flex items-center justify-center">
                <AppLogo />
            </div>
            <div className="flex flex-col justify-between border-r border-[color:var(--color-text-neutral8)] h-full !p-4">
                <nav className="mt-2 !space-y-2">
                    {menuSections.map(item => (
                        <SidebarNavItem key={item.key} item={item} />
                    ))}
                </nav>
                <div>
                    <Link
                        href="/support"
                        className="flex items-center gap-2 rounded-md !p-2 text-[var(--color-text-neutral4)]"
                    >
                        <BaseIcon name="Info" />
                        <span>Support</span>
                    </Link>
                    <BaseButton
                        text="Logout"
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
