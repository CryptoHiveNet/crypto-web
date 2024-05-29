import { CallbacksOptions } from 'next-auth';

const jwt: CallbacksOptions['jwt'] = async ({ token, user }) => {
    if (user) {
        token.user = user;
        token.role = user.role;
    }
    return token;
};
export default jwt;
