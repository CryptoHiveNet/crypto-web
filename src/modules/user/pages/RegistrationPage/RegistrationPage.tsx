'use client';
import { useTranslation } from 'react-i18next';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
    const { t } = useTranslation();
    return (
        <main className="mx-auto w-[29.375rem] max-w-full px-4 py-12 font-base">
            <h1 className="mb-8 font-[inherit] text-md text-grey-1">
                {t('register')}
            </h1>
            <RegistrationForm />
        </main>
    );
};

export default RegistrationPage;
