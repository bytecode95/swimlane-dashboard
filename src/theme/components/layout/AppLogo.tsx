'use client';

import Image from 'next/image';
import React from 'react';

interface AppLogoProps {
    collapsed?: boolean;
    className?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({ collapsed = false, className }) => {
    return (
        <div className={`flex items-center justify-center ${className || ''}`} style={{ height: 24 }}>
            {collapsed ? (
                <Image src="/images/app-logo-collapsed.svg" alt="App Logo" width={40} height={40} priority />
            ) : (
                <Image src="/images/app-logo.svg" alt="App Logo" width={120} height={60} priority />
            )}
        </div>
    );
};

export default AppLogo;
