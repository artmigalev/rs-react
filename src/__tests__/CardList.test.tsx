import CardList from '@/components/card-list/CardList';
import type { ICard } from '@/types/card.interface';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import type { IPeople } from 'swapi-ts';

vi.mock('@/components/card/Card', () => {
  const MockCard = () => <div></div>;

  return {
    default: MockCard,
  };
});

vi.mock('@/api/services/cards.service', async () => {
  const CardService = vi.fn(
    class {
      getDefaultCard = (people: IPeople): ICard => {
        return {
          name: people.name,
          gender: people.gender,
          birth_year: people.birth_year,
          hair_color: people.hair_color,
          skin_color: people.skin_color,
          eye_color: people.eye_color,
        };
      };
    }
  );

  return { default: CardService };
});

describe('CardList', () => {
  const mockData = [
    {
      name: 'nameMock',
      birth_year: '1990',
      gender: 'men',
      hair_color: 'red',
      skin_color: 'blue',
      eye_color: 'black',
      homeworld: 'string',
      films: ['string'],
      species: [],
      vehicles: ['string'],
      starships: ['string'],
      created: new Date(),
      edited: new Date(),
      url: 'string',
      height: 'sds',
      mass: '',
    },
  ] satisfies IPeople[];
  it('render list card by data', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <CardList dataCards={mockData} />
      </MemoryRouter>
    );

    const list = getByTestId('list-card');

    expect(list).toBeInTheDocument();
    expect(list.childElementCount).toBe(mockData.length);
  });
  it.afterEach(cleanup);

  it('render plug when data empty', () => {
    const mockData: [] = [];
    render(<CardList dataCards={mockData} />);

    const plug = screen.getByText(/cards not found bi list/i);

    expect(plug).toBeInTheDocument();
  });
});
