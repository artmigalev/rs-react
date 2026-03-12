import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app', () => {
  render(<App />);

  expect(screen.getByText(/Simulate Errors/i)).toBeInTheDocument();
});
