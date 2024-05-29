import { CallbacksOptions } from 'next-auth';

const redirect: CallbacksOptions['redirect'] = async ({ url, baseUrl }) => {
    if (url.startsWith('/')) return `${baseUrl}${url}`;
    else if (new URL(url).origin === baseUrl) return url;
    return baseUrl;
};
export default redirect;
