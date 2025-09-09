import Image from 'next/image';
import React from 'react';

interface AppLogoProps {
    size?: number;
    variant?: 'full' | 'icon';
    className?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({ variant = 'icon', className }) => {
    return (
        <div className={`flex items-center gap-2 ${className || ''}`} style={{ height: 24 }}>
            <Image src="/images/app-logo.svg" alt="App Logo" width={120} height={60} priority={true} />

            {variant === 'full' && (
                <span className="font-bold text-lg" style={{ color: 'var(--color-foreground)' }}>
                    <Image
                        src="/images/app-logo-collapsed.svg"
                        alt="App Logo"
                        width={200}
                        height={100}
                        priority={true}
                    />
                </span>
            )}
        </div>
    );
};

export default AppLogo;
