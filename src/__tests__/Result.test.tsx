import Result from '@/components/result/Result';
import type { IPeople } from '@/types/people.interface';
import { render, screen } from '@testing-library/react';

describe('Result', () => {
  const state = {
    people: [],
    isLoad: true,
  };

  it('should be  plug when results empty', () => {
    render(<Result results={state.people} />);

    const plug = screen.getByText(/not found/i);

    expect(plug).toBeInTheDocument();
  });

  it('should loader when loading data', () => {
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

    const initialState: [] = [];
    const newResults = mockData;

    const { rerender } = render(<Result results={initialState} />);

    rerender(<Result results={newResults} />);

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('render handle Button error', () => {
    render(<Result results={state.people} />);
    const btnError = screen.getByRole('button', { name: /Simulate Errors/i });

    expect(btnError).toBeInTheDocument();
  });
});
