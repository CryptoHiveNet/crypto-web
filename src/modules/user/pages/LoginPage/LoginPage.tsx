'use client';
import { useTranslation } from 'react-i18next';

import LoginForm from '../../components/LoginForm/LoginForm';

type Props = {
    searchParams?: Record<'callbackUrl', string>;
};
const LoginPage = (props: Props) => {
    const { t } = useTranslation();
    return (
        <main className="w-screen h-screen flex">
            <div className="flex-1 bg-blue-500 flex justify-center items-center">
                <h1 className="text-9xl text-white">Login</h1>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <LoginForm callbackUrl={props.searchParams?.callbackUrl} />
            </div>
        </main>
    );
};

export default LoginPage;
