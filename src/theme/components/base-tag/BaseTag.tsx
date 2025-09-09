'use client';

import React from 'react';
import clsx from 'clsx';
import { BaseIcon } from '../base-icon/BaseIcon';
import { IconName } from '@/theme/constants';

interface BaseTagProps {
    text: string;
    bgClass?: string;
    textClass?: string;
    roundedClass?: string;
    iconName?: IconName;
    iconSize?: number;
}

const BaseTag: React.FC<BaseTagProps> = ({
    text,
    bgClass = 'bg-[var(--color-primary)]',
    textClass = 'text-white',
    roundedClass = 'rounded-full',
    iconName,
    iconSize = 12,
}) => {
    return (
        <span
            className={clsx(
                'inline-flex items-center !px-2 !py-1 text-xs !font-medium',
                bgClass,
                textClass,
                roundedClass
            )}
        >
            {iconName && <BaseIcon name={iconName} size={iconSize} className="mr-1 flex-shrink-0" />}
            {text}
        </span>
    );
};

export default BaseTag;
