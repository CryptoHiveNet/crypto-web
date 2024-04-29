import { render, waitFor } from '@testing-library/react';

import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('renders a dropdown with the provided label', () => {
    const label = 'Options';
    const { getByText } = render(<Dropdown label={label} />);
    waitFor(() => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });

  it('renders a dropdown with the provided size', () => {
    const size = 'large';
    const { container } = render(<Dropdown size={size} />);
    waitFor(() => {
      expect(container.firstChild).toHaveClass(`fb-dropdown-${size}`);
    });
  });
});
