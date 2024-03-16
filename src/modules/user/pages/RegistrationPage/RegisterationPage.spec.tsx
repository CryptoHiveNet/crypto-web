import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegistrationPage from "./RegistrationPage";
import { t } from "i18next";

it("should render the RegistrationPage with without any errors", () => {
    render(<RegistrationPage />);

    expect(screen.getByText('textbox', {name: t('your-email')})).toBeInTheDocument();
})