import Sidebar from '@/theme/components/layout/Sidebar';
import Topbar from '@/theme/components/layout/TopBar';
import React from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Topbar />
                <main className="flex-1 p-4 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
};
