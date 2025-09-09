'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { MenuSection } from '@/theme/types';
import { BaseIcon } from '../base-icon/BaseIcon';
import { usePathname } from 'next/navigation';

interface Props {
    item: MenuSection;
    depth?: number;
    collapsed?: boolean;
}

const SidebarNavItem: React.FC<Props> = ({ item, depth = 0, collapsed }) => {
    const pathname = usePathname();
    const children = item.children ?? [];
    const hasChildren = children.length > 0;
    const [open, setOpen] = useState(false);
    const isCurrent = item.path === pathname;
    const isChildActive = hasChildren && children.some(child => child.path === pathname);
    const isActive = isCurrent || isChildActive;

    useEffect(() => {
        if (isActive && hasChildren) setOpen(true);
    }, [isActive, hasChildren]);

    return (
        <div>
            <div
                className={clsx(
                    'flex items-center gap-2 cursor-pointer !p-3 transition-all rounded-xl border-2',
                    depth > 0 && 'pl-6',
                    isActive ? 'border-[var(--color-text-neutral7)]' : 'border-transparent hover:bg-gray-100',
                    collapsed && 'justify-center'
                )}
                onClick={() => hasChildren && setOpen(!open)}
            >
                {item.icon && React.isValidElement(item.icon) && (
                    <span className="flex-shrink-0 items-center justify-center">
                        {React.cloneElement(item.icon as React.ReactElement<{ color?: string }>, {
                            color: isActive ? 'var(--color-primary)' : 'var(--color-text-neutral4)',
                        })}
                    </span>
                )}
                {!collapsed && (
                    <>
                        {item.path ? (
                            <Link href={item.path}>
                                <span
                                    className={clsx(
                                        isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-neutral4)]'
                                    )}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        ) : (
                            <span
                                className={clsx(
                                    isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-neutral4)]'
                                )}
                            >
                                {item.label}
                            </span>
                        )}
                    </>
                )}
                {hasChildren && !collapsed && (
                    <span className="ml-auto select-none">
                        <BaseIcon
                            name={open ? 'ArrowUp' : 'DownArrow'}
                            size={18}
                            color={isActive ? 'var(--color-primary)' : 'var(--color-text-neutral4)'}
                        />
                    </span>
                )}
            </div>
            {hasChildren && open && !collapsed && (
                <div
                    className={clsx(
                        'p-1 rounded-xl !mt-2',
                        isChildActive ? 'border border-[var(--color-text-neutral7)]' : 'bg-transparent'
                    )}
                >
                    {children.map(child => {
                        const childActive = pathname === child.path;
                        return (
                            <Link key={child.key} href={child.path}>
                                <div
                                    className={clsx(
                                        '!ml-5 flex text-sm items-center gap-1 !p-1 rounded-md cursor-pointer',
                                        childActive
                                            ? 'text-[var(--color-primary)]'
                                            : 'text-[var(--color-text-neutral4)]'
                                    )}
                                >
                                    {child.icon && React.isValidElement(child.icon) && (
                                        <span className="flex-shrink-0">
                                            {React.cloneElement(child.icon as React.ReactElement<{ color?: string }>, {
                                                color: childActive
                                                    ? 'var(--color-primary)'
                                                    : 'var(--color-text-neutral4)',
                                            })}
                                        </span>
                                    )}
                                    <span>{child.label}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SidebarNavItem;
