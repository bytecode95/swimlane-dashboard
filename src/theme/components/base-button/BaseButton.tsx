'use client';

import React from 'react';
import clsx from 'clsx';
import { BaseIcon } from '../base-icon/BaseIcon';
import { IconName } from '@/theme/constants';

interface BaseButtonProps {
    text?: string;
    iconName?: IconName;
    icon?: React.ReactNode;
    onClick?: () => void;
    bgColor?: string;
    textColor?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const BaseButton: React.FC<BaseButtonProps> = ({
    text,
    iconName,
    icon,
    onClick,
    bgColor = 'var(--color-primary)',
    textColor = '#fff',
    fullWidth = true,
    disabled = false,
    className,
    type = 'button',
}) => {
    const renderIcon = () => {
        if (icon) return icon;
        if (iconName) return <BaseIcon name={iconName} size={18} color={textColor} />;
        return null;
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                'flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium cursor-pointer',
                fullWidth && 'w-full',
                className
            )}
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
        >
            {renderIcon() && <span className="flex-shrink-0">{renderIcon()}</span>}
            {text && <span>{text}</span>}
        </button>
    );
};

export default BaseButton;
