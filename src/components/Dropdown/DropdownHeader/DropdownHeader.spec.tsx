import { render, waitFor } from '@testing-library/react';

import Dropdown from '../Dropdown';
import DropdownHeader from './DropdownHeader';

const onClick = jest.fn();
const children = 'Dropdown Header Content';
describe('DropdownHeader', () => {
    it('renders children correctly', () => {
        const { getByText } = render(
            <Dropdown>
                <DropdownHeader>{children}</DropdownHeader>
            </Dropdown>,
        );
        waitFor(() => {
            expect(getByText(children)).toBeInTheDocument();
        });
    });

    it('passes onClick handler correctly', () => {
        const { container } = render(
            <Dropdown>
                <DropdownHeader onClick={onClick} />
            </Dropdown>,
        );
        waitFor(() => {
            container.firstChild?.click();
            expect(onClick).toHaveBeenCalledTimes(1);
        });
    });
});
