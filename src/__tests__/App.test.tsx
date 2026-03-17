import { render, screen } from '@testing-library/react';
import App from '../App';

test('render App', () => {
  const { debug } = render(<App />);

  debug();

  const searchComponent = screen.getByTestId('section');
  const errorBtn = screen.getByText(/simulate errors/i);

  expect(errorBtn).toBeInTheDocument();
  expect(searchComponent).toBeInTheDocument();
});
