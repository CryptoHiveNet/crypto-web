import { render } from "@testing-library/react";
import { useRegistration } from "../../hooks/useRegisterUser";

import RegistrationPage from "./RegistrationPage";
import { boolean } from "zod";
import { NoticeMessage } from '../../../../shared/types/components/NoticeMessage';
import { describe } from "@jest/globals";

jest.mock("i18next", () => ({
  t: (key: string) => key,
}));

jest.mock("../../hooks/useRegisterUser");
const useRegistrationMock = useRegistration as jest.MockedFunction<typeof useRegistration>;

  useRegistrationMock.mockReturnValue({
    submit: jest.fn(),
    isPending: false,
    errorMessages: [] as NoticeMessage[],
    invalidAddressError: undefined,
    isSuccess: false
  });

beforeEach(() => {
useRegistrationMock.mockClear();
});

describe("RegistrationPage", () => {
it("should render the registration page component", () => {
render(<RegistrationPage />);
});
});
