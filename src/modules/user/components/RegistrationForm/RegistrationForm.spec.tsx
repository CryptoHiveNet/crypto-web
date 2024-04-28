import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { RegistrationForm } from "./RegistrationForm";

jest.mock('@/types/utils/i18n');

describe("Renders RegistrationForm", () => {
it("should render registration form", async () => {
    render(<RegistrationForm />);

    expect(screen.getByTestId("registrationForm")).toBeDefined();


});
});