'use client';
import { signIn, useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

import Button from '@/types/components/Button/Button';

const LoginButton = () => {
    const { t } = useTranslation();
    const { data: session } = useSession();
    return (
        <Button
            color="blue"
            disabled={session && session.user ? true : false}
            onClick={() => signIn()}
        >
            {t('login')}
        </Button>
    );
};
export default LoginButton;
