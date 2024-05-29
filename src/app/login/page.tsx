import React from 'react';

import { Container } from '@/types/components/Container/Container';
import { BaseLayout } from '@/types/modules/shared/layout/BaseLayout';
import LoginPage from '@/types/modules/user/pages/LoginPage/LoginPage';

const page = () => {
    return (
        <BaseLayout
            header={<></>}
            footer={<></>}
        >
            <LoginPage />
        </BaseLayout>
    );
};

export default page;
