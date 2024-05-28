'use client';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/types/shared/components/LanguageSwitcher/LanguageSwitcher';

import RegisterButton from '../shared/components/RegisterButton/RegisterButton';

export default function Page() {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t('home_page_title')}</h1>
            <LanguageSwitcher />
            <div>
                <h3>Register Section Only For Test</h3>
                <div>
                    <h6>Register Button:</h6>
                    <RegisterButton />
                </div>
            </div>
        </>
    );
}
