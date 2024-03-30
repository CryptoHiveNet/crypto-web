import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonGroup from './ButtonGroup';
import Button from '../button/Button';

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

it('calls onClick function when any button in the group is clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <ButtonGroup onClick={onClickMock}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup>,
  );
  fireEvent.click(getByText('Button 1'));
  fireEvent.click(getByText('Button 2'));
  expect(onClickMock).toHaveBeenCalledTimes(2);
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
