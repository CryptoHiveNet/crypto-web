import NextAuth, { NextAuthOptions } from 'next-auth';

import jwt from '@/types/utils/nextAuth/callbacks/jwt';
import redirect from '@/types/utils/nextAuth/callbacks/redirect';
import session from '@/types/utils/nextAuth/callbacks/session';
import signIn from '@/types/utils/nextAuth/callbacks/signIn';
import { NextAuthProviders } from '@/types/utils/nextAuth/providers';

export const authOptions: NextAuthOptions = {
    providers: NextAuthProviders,
    callbacks: {
        signIn,
        redirect,
        session,
        jwt,
    },
    pages: {
        signIn: '/login',
    },
};

export const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
