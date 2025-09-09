'use client';

import React, { useEffect, useState } from 'react';
import Sidebar from '@/theme/components/layout/Sidebar';
import { TopBar } from '@/theme';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setCollapsed(window.innerWidth < 1536);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex h-screen bg-gray-50 overflow-y-hidden">
            <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

            <div className="flex flex-col flex-1">
                <TopBar onToggleSidebar={() => setCollapsed(!collapsed)} />
                <main className="flex-1 overflow-auto p-4  z-10">{children}</main>
            </div>
        </div>
    );
};
