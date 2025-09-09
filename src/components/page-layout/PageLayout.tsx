'use client';

import React from 'react';
import BaseAvatar from '@/theme/components/base-avatar/BaseAvatar';
import BaseButton from '@/theme/components/base-button/BaseButton';
import BaseTag from '@/theme/components/base-tag/BaseTag';
import { STATUS_CONFIG, StatusKey } from '@/types/project-status.types';

interface PageLayoutProps {
    title: string;
    status: StatusKey;
    secondaryTitle?: string;
    assigned?: { id: string; src: string; alt?: string }[];
    onEdit?: () => void;
    lastUpdated?: string;
    children?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
    title,
    status,
    secondaryTitle,
    assigned = [],
    onEdit,
    lastUpdated,
    children,
}) => {
    const statusConfig = STATUS_CONFIG[status];

    return (
        <div className="flex flex-col w-full h-full">
            <div className="sticky top-0 z-10 bg-white border-b border-[var(--color-text-neutral8)] !p-4">
                <div className="flex items-center justify-between w-full mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="text-2xl font-semibold text-[var(--color-text-neutral1)]">{title}</h1>
                        <BaseTag {...statusConfig} roundedClass="rounded-md" />
                    </div>
                </div>

                {secondaryTitle && <span className="text-sm text-[var(--color-text-neutral5)]">{secondaryTitle}</span>}
                <div className="flex items-center gap-4 flex-wrap !my-2">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-[var(--color-text-neutral5)]">Assigned:</span>
                        {assigned.length > 0 && (
                            <div className="flex -space-x-3">
                                {assigned.slice(0, 3).map(user => (
                                    <BaseAvatar
                                        key={user.id}
                                        src={user.src}
                                        size={28}
                                        alt={user.alt || 'assigned user'}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    {onEdit && (
                        <BaseButton
                            text="Edit"
                            iconName="Edit"
                            bgColor="transparent"
                            textColor="var(--color-text-neutral5)"
                            fullWidth={false}
                            className="!rounded-full border border-[var(--color-text-neutral8)]  !px-3 !py-1"
                            onClick={onEdit}
                        />
                    )}
                </div>

                {lastUpdated && (
                    <div className="text-xs text-[var(--color-text-neutral5)]">Last updated on: {lastUpdated}</div>
                )}
            </div>
            <div className="flex-1 overflow-y-hidden !p-4">{children}</div>
        </div>
    );
};
