import NextAuth, { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';

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

                // const res = await fetch(LOGIN_URL, {
                //     method: 'POST',
                //     body: JSON.stringify({ username, password }),
                //     headers: { 'Content-Type': 'application/json' },
                // });
                // if (res.status === 401) {
                //     return null;
                // }
                // const user = await res.json();
                // return user;

                // Mock user for demonstration purposes. Replace with real authentication logic.
                const mockUser = {
                    id: '1',
                    name: credentials.username,
                    email: `${credentials.username}@gmail.com`,
                    role: 'User',
                };
                return mockUser ?? null;
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
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true;
            if (isAllowedToSignIn) {
                return true;
            } else {
                // Return false to display a default error message
                return false;
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith('/')) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;

            return baseUrl;
        },
        async session({ session, user, token }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.user = token.user ?? session.user;

            return session;
        },
        async jwt({ token, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin

            if (user) {
                token.user = user;
                token.role = user.role;
            }

            return token;
        },
    },
};

export const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
