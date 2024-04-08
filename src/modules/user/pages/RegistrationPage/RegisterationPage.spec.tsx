import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RegistrationPage from './RegistrationPage'; // Assuming this is the file where the RegistrationPage component is defined

// Mocking the i18next translation function
jest.mock('i18next', () => ({
  t: (key: string) => key,
}));

it('submits the form when the register button is clicked', () => {
  const { getByText } = render(<RegistrationPage />);
  const registerButton = getByText('register-new-user');

  fireEvent.click(registerButton);
  // Add your assertions for form submission, such as checking if a submit handler function was called or if a network request was made.
});
