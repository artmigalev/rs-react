import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '@/components/card/Card';
import type { ICard } from '@/types/card.interface';
import { MemoryRouter, Route, Routes } from 'react-router';

vi.mock('react-router-dom', async () => {
  return {
    NavLink: ({
      children,
      to,
      className,
    }: {
      children: React.ReactNode;
      to: string;
      className?: ({ isActive }: { isActive: boolean }) => string;
    }) => (
      <a
        href={to}
        className={typeof className === 'function' ? className({ isActive: false }) : className}
      >
        {children}
      </a>
    ),
    useParams: vi.fn(() => ({ page: 'home' })),
  };
});

export const mockCard = {
  name: 'card-name',
  birth_year: '2026',
  gender: 'man',
  hair_color: 'blue',
  skin_color: 'red',
  eye_color: 'red',
} satisfies ICard;

const renderWithRouter = (ui: React.ReactElement, { route = '/1' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/:page" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Card', () => {
  it('renders without breaking', () => {
    const { getByRole } = renderWithRouter(<Card {...mockCard} />);

    const list = getByRole('list');

    expect(list).toBeInTheDocument();

    expect(list.childNodes).toHaveLength(Object.keys(mockCard).length);
    expect(screen.getByRole('heading', { name: mockCard.name })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: mockCard.name })).toHaveTextContent(mockCard.name);
  });
});
