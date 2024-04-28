import { render, waitFor } from '@testing-library/react';

import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('renders a dropdown with the provided label', () => {
    // Arrange
    const label = 'Options';

    // Act
    const { getByText } = render(<Dropdown label={label} />);

    // Assert
    waitFor(() => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });

  it('renders a dropdown with the provided size', () => {
    // Arrange
    const size = 'large';

    // Act
    const { container } = render(<Dropdown size={size} />);

    // Assert
    waitFor(() => {
      expect(container.firstChild).toHaveClass(`fb-dropdown-${size}`);
    });
  });
});
