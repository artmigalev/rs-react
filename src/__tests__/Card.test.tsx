import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '@/components/card/Card';
import type { ICard } from '@/types/card.interface';

export const mockCard = {
  name: 'card-name',
  birth_year: '2026',
  gender: 'man',
  hair_color: 'blue',
  skin_color: 'red',
  eye_color: 'red',
} satisfies ICard;

describe('Card', () => {
  it('renders without breaking', () => {
    const { getByRole } = render(<Card {...mockCard} />);

    const list = getByRole('list');

    expect(list).toBeInTheDocument();

    expect(list.childNodes).toHaveLength(Object.keys(mockCard).length);
    expect(screen.getByRole('heading', { name: mockCard.name })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: mockCard.name })).toHaveTextContent(mockCard.name);
  });
});
