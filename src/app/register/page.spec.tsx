import { describe } from "@jest/globals";
import { render } from "@testing-library/react";
import Page from "./page";

describe("User Registration", () => {
  it("should render the user registration page", () => {
    render(<Page />);
  });
});
