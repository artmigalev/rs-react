import ErrorBtn from '@/components/error-handling/error-btn/ErrorBtn';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ErrorBtn', () => {
  it(' render  with DOM', () => {
    const { debug } = render(<ErrorBtn />);

    debug();

    expect(screen.getByText(/simulate errors/i)).toBeInTheDocument();
  });
  it('should throw error on click', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(<ErrorBtn />);

    const user = userEvent.setup();
    await expect(user.click(screen.getByText(/simulate errors/i))).rejects.toThrow();

    consoleSpy.mockRestore();
  });
});
