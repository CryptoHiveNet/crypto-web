import { withAuth } from 'next-auth/middleware';
import { NextRequest } from 'next/server';

import { RoleType } from './types/user/role';

export default withAuth({
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ req, token }: { req: NextRequest; token: any }) {
            const pathName = req.nextUrl.pathname;
            console.log('pathName', pathName);
            if (
                pathName.startsWith('dashboard/cp') &&
                token.role !== RoleType.Admin
            ) {
                return false;
            }

            if (
                pathName.startsWith('dashboard/user') &&
                token.role !== RoleType.User
            ) {
                return false;
            }

            return true;
        },
    },
});

export const config = {
    matcher: ['/dashboard/:path*'],
};
