import { render, screen } from "@testing-library/react";
import TextBox from "./TextBox"; // Adjust the import path as necessary
import "@testing-library/jest-dom";
import { TextInputType } from "@/types/components/textbox";

it("renders correctly with required props", () => {
  render(<TextBox type={TextInputType.text} labelText="Test Label" />);

  const inputElement = screen.getByRole("textbox");
  const labelElement = screen.getByText("Test Label");

  expect(inputElement).toBeInTheDocument();
  expect(labelElement).toBeInTheDocument(); 
});

it("passes the placeholder prop to TextInput", () => {
  const placeholderText = "Enter your text";
  render(
    <TextBox
      type={TextInputType.text}
      labelText="Placeholder Test"
      placeholder={placeholderText}
    />
  );

  expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
});

it("marks TextInput as required when the required prop is true", () => {
  render(
    <TextBox
      type={TextInputType.text}
      labelText="Required Test"
      required={true}
    />
  );

  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeRequired();
});

it("handles custom color and helper text", () => {
  render(
    <TextBox
      type={TextInputType.text}
      labelText="Color Test"
      color="red"
      helperText="Helper text example"
    />
  );

  const helperTextElement = screen.getByText("Helper text example");
  expect(helperTextElement).toBeInTheDocument();
});
