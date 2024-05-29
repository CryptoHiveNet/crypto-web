import { getToken } from 'next-auth/jwt';
import { signIn } from 'next-auth/react';
import { NextResponse } from 'next/server';

import { Route } from './modules/shared/constants/routes';
import { UserToken } from './types/user/token';

import type { NextRequest } from 'next/server';
export async function middleware(request: NextRequest) {
    const { pathname }: { pathname: string } = request.nextUrl;
    const token = await getToken({ req: request });
    const user: UserToken | null = token?.user as UserToken;

    const Redirect = () => {
        if (user?.role == 'Admin') {
            return NextResponse.redirect(new URL('/cp/dashboard', request.url));
        } else if (user?.role == 'User') {
            return NextResponse.redirect(
                new URL('/user/dashboard', request.url),
            );
        } else {
            return NextResponse.redirect(
                new URL(
                    Route.login +
                        '?callbackUrl=' +
                        encodeURIComponent(request.url),
                    request.url,
                ),
            );
        }
    };
    const authRoutes: Route[] = [Route.login, Route.register];

    if (!!token && authRoutes.includes(pathname as Route)) {
        return Redirect();
    }
    if (
        (!!token && pathname.startsWith('/cp') && user.role !== 'Admin') ||
        (!!token && pathname.startsWith('/user') && user.role !== 'User')
    ) {
        return Redirect();
    }

    if (!token) {
        if (pathname.includes('/cp') || pathname.includes('/user')) {
            return Redirect();
        }
    } else {
        if (
            (pathname.startsWith('/cp') && user.role !== 'Admin') ||
            (pathname.startsWith('/user') && user.role !== 'User')
        ) {
            return Redirect();
        }
    }
}

export const config = {
    matcher: [
        Route.login,
        Route.register,
        '/forgot-password',
        '/cp/:path*',
        '/user/:path*',
    ],
};
