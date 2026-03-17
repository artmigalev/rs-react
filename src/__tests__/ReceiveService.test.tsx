import { ReceiveService } from '@/api/services/receive.service';

describe('ReceiveService', () => {
  const people = {
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
  };

  const mockResponse = {
    count: 66,
    next: 67,
    previous: null,
    results: [people],
  };
  beforeEach(() => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    } as Response);
  });

  it('should fetch  data on init', async () => {
    const service = ReceiveService.getInstance();
    await service.init();
    const results = service.getResults();
    expect(results).toEqual(mockResponse.results);
  });
  it('should filter by value', async () => {
    const service = ReceiveService.getInstance();

    await service.init();
    const result = service.getPeopleBySearchValue('nameMock');
    expect(result.length).toBe(1);
  });
});
