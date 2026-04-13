import { Home } from '@/layout/pages/home/Home';
import { render, screen } from '@testing-library/react';

vi.mock('react-router', async () => {
  return {
    Outlet: () => <div data-testid="outlet" />,
    useSearchParams: vi.fn(() => {
      const params = new URLSearchParams({ search: 'luke' });
      const setSearchParams = vi.fn();
      return [params, setSearchParams];
    }),
  };
});

describe('home', () => {
  it('should be render component Search', () => {
    render(<Home />);

    const searchInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(searchInput.value).toBe('luke');
  });
});
