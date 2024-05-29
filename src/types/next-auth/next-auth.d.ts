import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            role: string;
            // address: string;
        };
    }
    interface User {
        id: string;
        name: string;
        email: string;
        role: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        /** OpenID ID Token */
        // idToken?: string;
        user: {
            id: string;
            name: string;
            email: string;
            role: string;
            // address: string;
        };
    }
}
