import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopMenu from "./TopMenu";

test("loads and displays TopMenu", async () => {
  // ARRANGE
  render(<TopMenu />);

  // ASSERT
  expect(screen.getByText("Home1"));
  expect(screen.getByText("About"));
  expect(screen.getByText("Services"));
  expect(screen.getByText("Pricing"));
  expect(screen.getByText("Contact"));
});
