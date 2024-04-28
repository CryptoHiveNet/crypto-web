import '@testing-library/jest-dom';

import { fireEvent, render, waitFor } from '@testing-library/react';

import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

it('renders children correctly', () => {
  const { getByText } = render(
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>,
  );
  expect(getByText('Button 1')).toBeInTheDocument();
  expect(getByText('Button 2')).toBeInTheDocument();
  expect(getByText('Button 3')).toBeInTheDocument();
});

it('calls onClick function when any button in the group is clicked', async () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <ButtonGroup onClick={onClickMock}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup>,
  );
  fireEvent.click(getByText('Button 1'));
  fireEvent.click(getByText('Button 2'));
  await waitFor(() => {
    expect(onClickMock).toHaveBeenCalledTimes(2);
  });
});

it('applies additional class name correctly', () => {
  const { container } = render(
    <ButtonGroup className='custom-class'>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup>,
  );
  const buttonGroup = container.querySelector('.custom-class');
  expect(buttonGroup).toBeInTheDocument();
});

it('should call onMouseEnter when mouse enters', async () => {
  const onMouseEnterMock = jest.fn();
  const { getByTestId } = render(
    <ButtonGroup
      testId='my-buttons'
      onMouseEnter={onMouseEnterMock}
    >
      <Button>Hoverable button</Button>
    </ButtonGroup>,
  );
  const buttonGroupsComponent = getByTestId('my-buttons');
  fireEvent.mouseEnter(buttonGroupsComponent);
  await waitFor(() => {
    expect(onMouseEnterMock).toHaveBeenCalled();
  });
});

it('should call onMouseLeave when mouse leaves', async () => {
  const onMouseLeaveMock = jest.fn();
  const { getByTestId } = render(
    <ButtonGroup
      testId='my-buttons'
      onMouseLeave={onMouseLeaveMock}
    >
      <Button>Hoverable button</Button>
    </ButtonGroup>,
  );
  const buttonGroupsComponent = getByTestId('my-buttons');
  fireEvent.mouseLeave(buttonGroupsComponent);
  await waitFor(() => {
    expect(onMouseLeaveMock).toHaveBeenCalled();
  });
});
