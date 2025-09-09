'use client';

import Image from 'next/image';
import React from 'react';

interface AppLogoProps {
    variant?: 'full' | 'icon';
    className?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({ variant = 'icon', className }) => {
    return (
        <div className={`flex items-center justify-center ${className || ''}`} style={{ height: 24 }}>
            <div className="2xl:hidden flex items-center justify-center">
                <Image src="/images/app-logo-collapsed.svg" alt="App Logo" width={40} height={40} priority />
            </div>

            <div className="hidden 2xl:flex items-center justify-center">
                <Image src="/images/app-logo.svg" alt="App Logo" width={120} height={60} priority />
            </div>
        </div>
    );
};

export default AppLogo;
