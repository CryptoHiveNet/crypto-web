import { fireEvent, render, screen } from '@testing-library/react';

import Carousel from './Carousel';

const onClickMock = jest.fn();
const onMouseEnterMock = jest.fn();
const onMouseLeaveMock = jest.fn();
const onSlideChangeMock = jest.fn();

const mockProps = {
    id: 'test-id',
    className: 'custom-class',
    slide: true,
    slideInterval: 5000,
    leftControl: <button>Left</button>,
    rightControl: <button>Right</button>,
    indicators: true,
    pauseOnHover: true,
    onSlideChange: onSlideChangeMock,
    testId: 'test-carousel',
    onClick: onClickMock,
    onMouseEnter: onMouseEnterMock,
    onMouseLeave: onMouseLeaveMock,
};
const test_children_text = 'Test Children';
const mockChildren = (
    <>
        <div>{test_children_text} 1</div>
        <div>{test_children_text} 2</div>
    </>
);

describe('Carousel component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render Carousel component with required props', () => {
        render(<Carousel {...mockProps}>{mockChildren}</Carousel>);
        const carouselComponent = screen.getByTestId(mockProps.testId);

        expect(carouselComponent).toBeInTheDocument();
        expect(carouselComponent).toHaveAttribute('id', mockProps.id);
        expect(carouselComponent).toHaveClass(mockProps.className);
    });

    it('should handle onClick event', () => {
        render(<Carousel {...mockProps}>{mockChildren}</Carousel>);
        const carouselComponent = screen.getByTestId(mockProps.testId);

        fireEvent.click(carouselComponent);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should handle onMouseEnter event', () => {
        render(<Carousel {...mockProps}>{mockChildren}</Carousel>);
        const carouselComponent = screen.getByTestId(mockProps.testId);

        fireEvent.mouseEnter(carouselComponent);
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('should handle onMouseLeave event', () => {
        render(<Carousel {...mockProps}>{mockChildren}</Carousel>);
        const carouselComponent = screen.getByTestId(mockProps.testId);

        fireEvent.mouseLeave(carouselComponent);
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('should handle onSlideChange event', () => {
        render(<Carousel {...mockProps}>{mockChildren}</Carousel>);
        expect(onSlideChangeMock).not.toHaveBeenCalled();
    });

    it('should render children', () => {
        render(<Carousel {...mockProps}>{mockChildren}</Carousel>);
        expect(screen.getByText(`${test_children_text} 1`)).toBeInTheDocument();
        expect(screen.getByText(`${test_children_text} 2`)).toBeInTheDocument();
    });

    it('should render left and right controls', () => {
        render(<Carousel {...mockProps}>{mockChildren}</Carousel>);
        expect(screen.getByText('Left')).toBeInTheDocument();
        expect(screen.getByText('Right')).toBeInTheDocument();
    });
});
