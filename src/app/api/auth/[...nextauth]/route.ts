import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';

import { LOGIN_URL } from '@/types/modules/shared/constants/apiRoutes';

console.log(process.env.GITHUB_ID);
console.log(process.env.GITHUB_SECRET3564355);

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Password',
                },
            },
            async authorize(credentials, req) {
                if (!credentials?.username || !credentials?.password)
                    return null;
                const { username, password } = credentials;
                const res = await fetch(LOGIN_URL, {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: { 'Content-Type': 'application/json' },
                });
                if (res.status === 401) {
                    return null;
                }
                const user = await res.json();
                return user;
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID ?? '',
            clientSecret: process.env.TWITTER_CLIENT_SECRET ?? '',
            version: '2.0', // opt-in to Twitter OAuth 2.0
        }),
        // FacebookProvider({
        //   clientId: process.env.FACEBOOK_CLIENT_ID,
        //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        // }),
    ],
};

export const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
