'use client';

import { DashboardLayout } from '@/components/layout/dashbaord/DashboardLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
