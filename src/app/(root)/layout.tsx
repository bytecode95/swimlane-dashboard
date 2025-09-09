'use client';

import AuthLayout from '@/components/layout/auth/AuthLayout';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <AuthLayout>{children}</AuthLayout>;
}
