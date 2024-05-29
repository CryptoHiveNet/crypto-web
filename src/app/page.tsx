'use client';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/types/shared/components/LanguageSwitcher/LanguageSwitcher';

import LoginButton from '../shared/components/LoginButton/LoginButton';
import LogoutButton from '../shared/components/LogoutButton/LogoutButton';
import RegisterButton from '../shared/components/RegisterButton/RegisterButton';

export default function Page() {
    const { t } = useTranslation();
    const { data: session } = useSession();
    return (
        <>
            <h1>{t('home_page_title')}</h1>
            <LanguageSwitcher />
            <div className="border p-5">
                <h3>Register Section Only For Test</h3>
                <div className="py-2">
                    <h6>Register Button:</h6>
                    <RegisterButton />
                </div>
                <div className="py-2">
                    <h6>Login Button:</h6>
                    <LoginButton />
                </div>
                <div className="py-2">
                    <h6>Logout Button:</h6>
                    <LogoutButton />
                </div>
                <div className="py-2">
                    <h6>Session Data:</h6>
                    <div>{session?.user.name}</div>
                    <div>{session?.user.email}</div>
                    <div>{session?.user.role}</div>
                </div>
            </div>
        </>
    );
}
