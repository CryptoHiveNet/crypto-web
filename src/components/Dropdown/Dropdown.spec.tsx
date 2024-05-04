import { render, waitFor } from '@testing-library/react';

import Dropdown from './Dropdown';

describe('Dropdown', () => {
    const label = 'Options';
    const size = 'large';
    const { getByText, container } = render(
        <Dropdown
            label={label}
            size={size}
        />,
    );
    it('renders a dropdown with the provided label', () => {
        waitFor(() => {
            expect(getByText(label)).toBeInTheDocument();
        });
    });

    it('renders a dropdown with the provided size', () => {
        waitFor(() => {
            expect(container.firstChild).toHaveClass(`fb-dropdown-${size}`);
        });
    });
});
