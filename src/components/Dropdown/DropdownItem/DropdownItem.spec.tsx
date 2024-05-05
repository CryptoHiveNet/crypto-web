import { HiCog } from 'react-icons/hi';

import { render, waitFor } from '@testing-library/react';

import Dropdown from '../Dropdown';
import DropdownItem from './DropdownItem';

const icon = HiCog;
const onClick = jest.fn();
describe('DropdownItem', () => {
    it('renders without crashing', () => {
        render(
            <Dropdown>
                <DropdownItem />
            </Dropdown>,
        );
    });

    it('renders with correct icon', () => {
        const { getByTestId } = render(
            <Dropdown>
                <DropdownItem icon={icon} />
            </Dropdown>,
        );
        waitFor(() => {
            const item = getByTestId('dropdown-item');
            expect(item).toHaveAttribute('icon', icon);
        });
    });

    it('passes onClick handler correctly', () => {
        const { getByTestId } = render(
            <Dropdown>
                <DropdownItem onClick={onClick} />
            </Dropdown>,
        );
        waitFor(() => {
            const item = getByTestId('dropdown-item');
            item.click();
            expect(onClick).toHaveBeenCalledTimes(1);
        });
    });
});
