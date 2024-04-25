import { fireEvent, render, waitFor, screen } from "@testing-library/react";

import Tabs from "./Tabs";
import TabsItem from "./TabsItem/TabsItem";

const mockOnActiveTabChange = jest.fn();

const mockProps = {
  id: "test-tabs",
  ariaLabel: "Test Tabs",
  className: "tabs",
  testId: "test-tabs",
  onActiveTabChange: mockOnActiveTabChange,
};

describe("Tabs component unit tests", () => {
  beforeEach(() => {
    mockOnActiveTabChange.mockClear();
  });

  it("should render Tabs component with required props", () => {
    render(
        <Tabs {...mockProps}>
          <TabsItem title="Tab 1">Tab 1 Content</TabsItem>
          <TabsItem title="Tab 2">Tab 2 Content</TabsItem>
        </Tabs>
      );

      const tabsComponent = screen.getByTestId("test-tabs"); 

      expect(tabsComponent).toBeInTheDocument();
      expect(tabsComponent).toHaveAttribute("aria-label", "Test Tabs");
      expect(tabsComponent).toHaveClass("tabs");
  });

  it("should fire onActiveTabChange callback when a tab is clicked", () => {
    render(
        <Tabs {...mockProps}>
          <TabsItem title="Tab 1">Tab 1 Content</TabsItem>
          <TabsItem title="Tab 2">Tab 2 Content</TabsItem>
        </Tabs>
      );

    fireEvent.click(screen.getByText("Tab 2"));

    waitFor(() => {
      expect(mockOnActiveTabChange).toHaveBeenCalledWith("Tab 2");
    });
  });
});
