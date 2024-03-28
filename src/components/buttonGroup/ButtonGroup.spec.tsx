import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonGroup from './ButtonGroup';

it('renders children correctly', () => {
  const { getByText } = render(
    <ButtonGroup>
      <button>Button 1</button>
      <button>Button 2</button>
    </ButtonGroup>
  );

  expect(getByText('Button 1')).toBeInTheDocument();
  expect(getByText('Button 2')).toBeInTheDocument();
});

it('passes id prop correctly', () => {
  const { container } = render(
    <ButtonGroup id='testId'>
      <button>Button 1</button>
      <button>Button 2</button>
    </ButtonGroup>
  );

  expect(container.querySelector('#testId')).toBeInTheDocument();
});
