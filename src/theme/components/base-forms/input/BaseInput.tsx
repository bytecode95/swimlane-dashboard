'use client';

import React from 'react';
import clsx from 'clsx';

import { IconName } from '@/theme/constants';
import { BaseIcon } from '../../base-icon/BaseIcon';

interface BaseSearchProps {
    placeholder?: string;
    iconName?: IconName;
    icon?: React.ReactNode;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    bgColor?: string;
    textColor?: string;
    fullWidth?: boolean;
    className?: string;
    rounded?: boolean;
}

const BaseSearch: React.FC<BaseSearchProps> = ({
    placeholder = 'Search...',
    iconName,
    icon,
    value,
    onChange,
    bgColor = 'bg-[var(--color-text-neutral7)]',
    textColor = 'var(--color-text-neutral1)',
    fullWidth = true,
    className,
    rounded = true,
}) => {
    const renderIcon = () => {
        if (icon) return icon;
        if (iconName) return <BaseIcon name={iconName} size={18} color={textColor} />;
        return null;
    };

    return (
        <div
            className={clsx(
                'flex items-center gap-2 px-3',
                fullWidth && 'w-full',
                rounded && 'rounded-md',
                bgColor,
                className
            )}
        >
            {renderIcon() && <span className="flex-shrink-0">{renderIcon()}</span>}
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={clsx('flex-1  outline-none text-sm', bgColor, textColor && `text-[${textColor}]`)}
            />
        </div>
    );
};

export default BaseSearch;
