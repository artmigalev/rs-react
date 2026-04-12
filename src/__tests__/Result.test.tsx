import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { useRouteLoaderData, useNavigation, useParams, useLocation } from 'react-router';
import Result from '@/components/result/Result';

const { vi_mockLoaderData } = vi.hoisted(() => {
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
      created: 'string',
      edited: 'string',
      url: 'string',
      height: 'sds',
      mass: '',
    },
  ];

  return {
    vi_mockLoaderData: {
      data: { results: mockData },
      counts: [3, 5],
    },
  };
});

vi.mock('react-router', async () => {
  return {
    useRouteLoaderData: vi.fn().mockReturnValue(vi_mockLoaderData),
    useNavigation: vi.fn().mockReturnValue({ state: 'idle' }),
    useParams: vi.fn().mockReturnValue({}),
    Outlet: () => null,
    useLocation: vi.fn().mockReturnValue({ pathname: '/' }),
  };
});

describe('Result', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should be  plug when results empty', () => {
    vi.mocked(useNavigation).mockReturnValue({ state: 'loading' });
    vi.mocked(useRouteLoaderData).mockReturnValue(undefined);
    vi.mocked(useParams).mockReturnValue({});

    render(<Result />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
