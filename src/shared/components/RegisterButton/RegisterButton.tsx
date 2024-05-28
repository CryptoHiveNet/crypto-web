'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import Button from '@/types/components/Button/Button';

const RegisterButton = () => {
    const { t } = useTranslation();
    const { data: session } = useSession();
    const router = useRouter();
    return (
        <Button
            color="blue"
            disabled={session && session.user ? true : false}
            onClick={() => router.push('/register')}
        >
            {t('register')}
        </Button>
    );
};
export default RegisterButton;
