import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';

export const NextAuthProviders = [
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
            if (!credentials?.username || !credentials?.password) return null;

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
];
