'use client';
import { useEffect, useRef, useState } from 'react';

import {
    getCsrfToken,
    getProviders,
    getSession,
    signIn,
} from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import Button from '@/types/components/Button/Button';
import TextBox from '@/types/components/TextBox/TextBox';
import { useToastContext } from '@/types/modules/shared/components/ToastContextProvider/ToastContextProvider';
import { CSRF } from '@/types/modules/shared/constants/apiRoutes';
import SubmitButton from '@/types/shared/components/SubmitButton/SubmitButton';
import { TextInputType } from '@/types/shared/types/components/textBox';
import { ToastType } from '@/types/shared/types/components/toast';

type Props = {
    callbackUrl?: string;
    error?: string;
};
const LoginForm = (props: Props) => {
    const { t } = useTranslation();
    const [providers, setProviders] = useState<any[]>([]);
    const [csrfToken, setCsrfToken] = useState<string>('');
    const { createToast, deleteToast, deleteAllToasts } = useToastContext();
    const router = useRouter();
    const username = useRef('');
    const password = useRef('');
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            username: username.current,
            password: password.current,
            redirect: true,
            callbackUrl: props.callbackUrl ?? '/',
        });

        if (!res?.error) {
            createToast({
                message: 'Login successful',
                type: ToastType.Success,
            });
            router.push(props.callbackUrl ?? 'http://localhost:3000');
        }
    };
    useEffect(() => {
        // Fetch the CSRF token from the server
        const fetchCsrfToken = async () => {
            const token = await getCsrfToken();
            if (token) setCsrfToken(token);
        };
        const fetchProviders = async () => {
            const providers = await getProviders();
            if (providers) {
                const providersArray = Object.values(providers).filter(
                    (provider) => provider.id !== 'credentials',
                );
                setProviders(providersArray);
            }
        };
        fetchCsrfToken();
        fetchProviders();
    }, []);
    return (
        <div>
            <h5>login</h5>
            <form
                onSubmit={onSubmit}
                className="flex w-96 flex-col gap-4"
            >
                <input
                    name="csrfToken"
                    type="hidden"
                    defaultValue={csrfToken}
                />
                <div>
                    <TextBox
                        name="username"
                        type={TextInputType.text}
                        labelText={t('username')}
                        onChange={(e) => (username.current = e.target.value)}
                        required
                    />
                </div>
                <div>
                    <TextBox
                        name="password"
                        type={TextInputType.password}
                        labelText={t('password')}
                        onChange={(e) => (password.current = e.target.value)}
                        required
                    />
                </div>
                <SubmitButton text={t('login')} />
                <Link href={props.callbackUrl ?? '/'}>{t('cancel')}</Link>
                <Link href="#">{t('forgot_password')}</Link>
                <div>
                    <div>or</div>
                    {providers.map((provider, index) => (
                        <div key={index}>
                            <Button onClick={() => signIn(provider.id)}>
                                Sign in with {provider.name}
                            </Button>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
