import { fireEvent, render, screen } from '@testing-library/react';

import Dropdown from './Dropdown';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const mockProps = {
    id: 'test-id',
    label: 'Options',
    dismissOnClick: true,
    inline: false,
    size: 'lg',
    placement: 'bottom',
    className: 'custom-class',
    testId: 'flowbite-dropdown-target',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};

describe('Dropdown component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders a dropdown with the provided label', () => {
        render(
            <Dropdown
                {...mockProps}
                renderTrigger={() => <button>Trigger</button>}
            />,
        );
        expect(screen.getByText('Trigger')).toBeInTheDocument();
    });

    it('should handle onMouseEnter event', () => {
        render(<Dropdown {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId(mockProps.testId));
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Dropdown {...mockProps} />);
        fireEvent.mouseLeave(screen.getByTestId(mockProps.testId));
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });
});
