import { CallbacksOptions } from 'next-auth';

const session: CallbacksOptions['session'] = async ({
    session,
    user,
    token,
}) => {
    session.user = token.user ?? session.user;
    return session;
};
export default session;
