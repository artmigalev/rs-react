import CardList from '@/components/card-list/CardList';
import type { IPeople } from '@/types/people.interface';
import { cleanup, render, screen } from '@testing-library/react';

describe('CardList', () => {
  it('render list card', () => {
    const mockData: IPeople[] = [
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
        created: 'string',
        edited: 'string',
        url: 'string',
        height: 'sds',
        mass: '',
      },
    ];

    const { getByTestId } = render(<CardList dataCards={mockData} />);

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
