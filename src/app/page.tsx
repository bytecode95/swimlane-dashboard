import { APP_PRIVATE_ROUTES, APP_PUBLIC_ROUTES } from '@/theme/constants/app.route';
import { redirect } from 'next/navigation';

export default async function RootPage() {
    const isLoggedIn = true;
    if (isLoggedIn) {
        redirect(APP_PRIVATE_ROUTES.DASHBOARD);
    }
    redirect(APP_PUBLIC_ROUTES.AUTH_LOGIN);
}
