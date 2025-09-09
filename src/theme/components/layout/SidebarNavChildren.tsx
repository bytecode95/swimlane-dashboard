'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { MenuSection } from '@/theme/types';
import { BaseIcon } from '../base-icon/BaseIcon';
import { usePathname } from 'next/navigation';

interface Props {
    childrenItems: MenuSection[];
    collapsed?: boolean;
}

const SidebarNavChildren: React.FC<Props> = ({ childrenItems, collapsed }) => {
    const pathname = usePathname();
    if (!childrenItems.length) return null;

    return (
        <>
            {!collapsed && (
                <div className="p-1 mt-2 rounded-xl border border-transparent">
                    {childrenItems.map(child => {
                        const active = pathname === child.path;
                        return (
                            <Link key={child.key} href={child.path}>
                                <div
                                    className={clsx(
                                        'flex items-center gap-1 p-1 ml-5 rounded-md cursor-pointer text-sm',
                                        active ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-neutral4)]'
                                    )}
                                >
                                    {child.icon &&
                                        React.cloneElement(child.icon as React.ReactElement<{ color?: string }>, {
                                            color: active ? 'var(--color-primary)' : 'var(--color-text-neutral4)',
                                        })}
                                    <span>{child.label}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}

            {collapsed && (
                <div className="absolute left-full top-0 z-50">
                    <div className="bg-white shadow-lg rounded-md p-2 min-w-max">
                        {childrenItems.map(child => {
                            const active = pathname === child.path;
                            return (
                                <Link key={child.key} href={child.path}>
                                    <div
                                        className={clsx(
                                            'flex items-center gap-2 p-1 rounded cursor-pointer my-1 hover:bg-gray-100',
                                            active ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-neutral4)]'
                                        )}
                                    >
                                        {child.icon &&
                                            React.cloneElement(child.icon as React.ReactElement<{ color?: string }>, {
                                                color: active ? 'var(--color-primary)' : 'var(--color-text-neutral4)',
                                            })}
                                        <span>{child.label}</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default SidebarNavChildren;
