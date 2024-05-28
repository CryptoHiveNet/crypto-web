'use client';
import { signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

import Button from '@/types/components/Button/Button';

const LogoutButton = () => {
    const { t } = useTranslation();
    const { data: session } = useSession();
    return (
        <Button
            color="red"
            disabled={session && session.user ? false : true}
            onClick={() => signOut()}
        >
            {t('logout')}
        </Button>
    );
};
export default LogoutButton;
