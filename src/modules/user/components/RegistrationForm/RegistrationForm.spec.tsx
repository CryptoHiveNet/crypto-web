import { describe, it, expect } from "@jest/globals";
import { render, screen, within } from "@testing-library/react";
import translation from "../../../../infrastructures/locales/en/translation.json";
import '@testing-library/jest-dom';
import RegistrationForm, { RegistrationFormProps } from "./RegistrationForm";
import { NoticeMessage } from "@/types/shared/types/components/NoticeMessage";
import { RegisterUserRequest } from "@/types/shared/types/user/register";

jest.mock('@/types/utils/i18n');

const props: RegistrationFormProps = {
    submit: (request: RegisterUserRequest) => {},
    isPending: false,
    errorMessages: [] as NoticeMessage[]
  }

describe("RegistrationForm", () => {
it("should render registration form", async () => {
    render(<RegistrationForm {...props} />);

    const registrationForm = screen.getByTestId("registrationForm");
    expect(registrationForm).toBeDefined();
    expect(screen.getByText(translation["email-place-holder"])).toBeDefined();
    expect(screen.getByText(translation["your-password"])).toBeDefined();
    expect(screen.getByText(translation["repeat-your-password"])).toBeDefined();
    const agreementCheckbox = within(registrationForm).getAllByRole('checkbox');
    expect(agreementCheckbox).toBeDefined();
    const submitButton = within(registrationForm).getByRole('button', {name: translation["register-new-user"]});
    expect(submitButton).toBeDefined();
});

it("should disable the submit button if the form is not completed yet.", async () => {
    render(<RegistrationForm {...props} />);
    const registrationForm = screen.getByTestId("registrationForm");
    const submitButton = within(registrationForm).getByRole('submit', {name: translation["register-new-user"]});
    expect(submitButton).toBeDefined();
    expect(submitButton).toHaveProperty('disabled', true);
});
it("should disable the submit button if the form is not completed correctly.", async () => {
    render(<RegistrationForm {...props} />);
});
it("should show an error if the username has been taken.", async () => {
    render(<RegistrationForm {...props} />);
});
it("should enable the submit button if the form is completed correctly.", async () => {
    render(<RegistrationForm {...props} />);
});
it("should hide the submit button and show a loading if the form is submitted.", async () => {
    render(<RegistrationForm {...props} />);
});
it("should show the submit button and hide the loading if the there is an error.", async () => {
    render(<RegistrationForm {...props} />);
});
it("should hide the submit button and show a success message if the user is being registered.", async () => {
    render(<RegistrationForm {...props} />);
});
});