import { describe, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { Footer } from "flowbite-react";

describe('Should render the footer', () => {
it('should render the footer component with the correct text', () => {
    render(<Footer />);

    expect(screen.getByText('footer')).toBeDefined();
})
});