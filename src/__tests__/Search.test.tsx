import Search from '@/components/search/Search';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  const mockProps = {
    value: '',
    onChange: vitest.fn(),
  };
  it('should be  render component', () => {
    render(<Search {...mockProps} />);

    const section = screen.getByTestId('section');
    const input = screen.getByRole('textbox');
    const nameInput = screen.getByPlaceholderText(/search value/i);

    expect(section).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
  });
  it('change values via the fireEvent.change method', async () => {
    const user = userEvent.setup();
    render(<Search {...mockProps} />);

    await user.type(screen.getByPlaceholderText(/search value/i), 'Test');

    expect(mockProps.onChange).toHaveBeenCalled();
    expect(mockProps.onChange).toHaveBeenLastCalledWith('Test');
  });
  it('should be input default value with state', () => {
    const initialProps = {
      value: 'test',
      onChange: vitest.fn(),
    };
    render(<Search {...initialProps} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;

    expect(input).toHaveValue(initialProps.value);
  });
});
