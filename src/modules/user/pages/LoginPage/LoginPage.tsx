import { useTranslation } from 'react-i18next';

import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
    const { t } = useTranslation();
    return (
        <main className="mx-auto w-[29.375rem] max-w-full px-4 py-12 font-base">
            <h1 className="mb-8 font-[inherit] text-md text-grey-1">
                {t('login')}
            </h1>

            <LoginForm />
        </main>
    );
};

export default LoginPage;
