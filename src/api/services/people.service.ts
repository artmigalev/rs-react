import { People, type IPeople } from 'swapi-ts';

export default class PeopleService {
  async getPage(
    page: number = 1,
    searchValue?: string
  ): Promise<{ results: IPeople[]; count: number }> {
    const response = await People.getPage(page, searchValue);
    const { results, count } = response;

    return {
      results,
      count,
    };
  }

  async getDataBySearchValue(value: string): Promise<IPeople[] | []> {
    const results = await People.findBySearch([value]);
    const searchPeople = results.resources.map((item) => item.value);

    return searchPeople;
  }
}
