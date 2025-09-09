'use client';

import React from 'react';
import clsx from 'clsx';

interface BaseTagProps {
    text: string;
    bgClass?: string;
    textClass?: string;
    roundedClass?: string;
}

const BaseTag: React.FC<BaseTagProps> = ({
    text,
    bgClass = 'bg-[var(--color-primary)]',
    textClass = 'text-white',
    roundedClass = 'rounded-full',
}) => {
    return <span className={clsx('!px-2 !py-1 text-xs !font-medium', bgClass, textClass, roundedClass)}>{text}</span>;
};

export default BaseTag;
