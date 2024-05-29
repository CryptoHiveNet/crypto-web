import { CallbacksOptions } from 'next-auth';

const signIn: CallbacksOptions['signIn'] = async ({
    user,
    account,
    profile,
    email,
    credentials,
}) => {
    const isAllowedToSignIn = true;
    if (isAllowedToSignIn) {
        return true;
    } else {
        return false;
    }
};
export default signIn;
