import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";

console.log(process.env.GITHUB_ID);
console.log(process.env.GITHUB_SECRET3564355
  );

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID ?? "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET ?? "",
      version: "2.0", // opt-in to Twitter OAuth 2.0
      
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
  ],
}

export const handler = NextAuth(authOptions);

export {handler as POST, handler as GET};