import { Button, Checkbox, Label } from 'flowbite-react';
import { t } from 'i18next';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { useRegistration } from '../../hooks/useRegisterUser';


const RegistrationPage = () => {
  
  return (
    <main className="mx-auto w-[29.375rem] max-w-full px-4 py-12 font-base">
            <h1 className="mb-8 font-[inherit] text-md text-grey-1">Register</h1>
            <RegistrationForm />
        </main>
  );
};

export default RegistrationPage;
