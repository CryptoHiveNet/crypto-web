import { Container } from '@/types/components/Container/Container'
import { BaseLayout } from '@/types/modules/shared/layout/BaseLayout'
import RegistrationPage from '@/types/modules/user/pages/RegistrationPage/RegistrationPage'
import React from 'react'

const page = () => {
  return (
    <BaseLayout header={<></>} footer={<></>}>
      <Container>
      <RegistrationPage />
      </Container>
    </BaseLayout>
  )
}

export default page
