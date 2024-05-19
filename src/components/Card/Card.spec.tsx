import { fireEvent, render, screen } from '@testing-library/react';

import Card from './Card';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();

const props = {
    id: 'test-id',
    href: 'https://example.com',
    imgAlt: 'Example Image',
    imgSrc: 'https://example.com/image.jpg',
    horizontal: true,
    className: 'custom-class',
    testId: 'my-card',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};
const test_children_text = 'Test Children';
describe('Card component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders a card with the provided content', () => {
        render(<Card {...props}>{test_children_text}</Card>);
        expect(screen.getByText(test_children_text)).toBeInTheDocument();
    });

    it('renders a card with an image', () => {
        render(<Card {...props} />);
        const image = screen.getByAltText('Example Image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    });

    it('applies additional class name correctly', () => {
        render(<Card {...props} />);
        const cardComponent = screen.getByTestId(props.testId);
        expect(cardComponent).toHaveClass(props.className);
    });

    it('calls onClick function when card is clicked', () => {
        render(<Card {...props} />);
        const cardComponent = screen.getByTestId(props.testId);
        fireEvent.click(cardComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should call onMouseEnter when mouse enters', () => {
        render(<Card {...props} />);
        const cardComponent = screen.getByTestId(props.testId);
        fireEvent.mouseEnter(cardComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should call onMouseLeave when mouse leaves', () => {
        render(<Card {...props} />);
        const cardComponent = screen.getByTestId(props.testId);
        fireEvent.mouseLeave(cardComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should pass other props down correctly', () => {
        const otherProps = { 'aria-label': 'card' };
        render(
            <Card
                {...props}
                {...otherProps}
            >
                {test_children_text}
            </Card>,
        );
        const cardComponent = screen.getByTestId(props.testId);
        expect(cardComponent).toHaveAttribute('aria-label', 'card');
    });
});
