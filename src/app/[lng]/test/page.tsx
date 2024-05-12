import { useTranslation } from '@/types/utils/i18n';
import React from 'react';

const TestPage = async () => {
    const {t} = await useTranslation();
  return (
    <div>
      The translation is gonna be here: {t('test')}
    </div>
  )
}

export default TestPage
