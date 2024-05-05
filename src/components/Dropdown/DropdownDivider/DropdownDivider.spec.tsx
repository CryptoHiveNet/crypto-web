import { render, waitFor } from '@testing-library/react';

import Dropdown from '../Dropdown';
import DropdownDivider from './DropdownDivider';

const className = 'custom-divider';
const onClick = jest.fn();
describe('DropdownDivider', () => {
    it('renders without crashing', () => {
        render(
            <Dropdown>
                <DropdownDivider />
            </Dropdown>,
        );
    });

    it('renders with correct className', () => {
        const { container } = render(
            <Dropdown>
                <DropdownDivider className={className} />
            </Dropdown>,
        );
        waitFor(() => {
            const divider = container.firstChild;
            expect(divider).toHaveClass(className);
        });
    });

    it('passes onClick handler correctly', () => {
        const { container } = render(
            <Dropdown>
                <DropdownDivider onClick={onClick} />
            </Dropdown>,
        );
        waitFor(() => {
            const divider = container.firstChild;
            divider?.click();
            expect(onClick).toHaveBeenCalledTimes(1);
        });
    });
});
