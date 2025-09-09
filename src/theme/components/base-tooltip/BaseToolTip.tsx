'use client';

import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';

interface BaseTooltipProps {
    content: ReactNode;
    children: React.ReactElement;
    position?: 'top' | 'right' | 'bottom' | 'left';
    className?: string;
}

const BaseTooltip: React.FC<BaseTooltipProps> = ({ content, children, position = 'top', className }) => {
    const [visible, setVisible] = useState(false);
    const positionClasses = {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
        bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    };

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div
                    className={clsx(
                        'absolute scale-z-200 !p-2 text-xs text-black bg-[var(--color-text-neutral7)] rounded shadow-md whitespace-nowrap',
                        positionClasses[position],
                        className
                    )}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default BaseTooltip;
