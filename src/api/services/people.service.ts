import { People, type IPeople } from 'swapi-ts';

export default class PeopleService {
  public countsPages: number[];
  #page: number = 1;

  static #instance: PeopleService;

  private constructor() {
    this.countsPages = this.getCounts(82);
  }

  getCounts(num: number): number[] {
    const counts = [];

    let value = Math.floor(num / 10);
    if (num % 10 > 0) {
      value = value + 1;
    }

    for (let i = 1; i <= value; i++) {
      counts.push(i);
    }

    return counts;
  }
  static getInstance() {
    if (!PeopleService.#instance) {
      PeopleService.#instance = new PeopleService();
    }
    return PeopleService.#instance;
  }

  async getPage<T>(page: number = 1): Promise<T | []> {
    this.#page = page;

    const response = await People.getPage(page);
    this.countsPages = this.getCounts(response.count);
    return response.results;
  }
  getCurrentPage() {
    return this.#page;
  }
  async getDataBySearchValue(value: string): Promise<IPeople[] | []> {
    if (value.length > 0) {
      const results = await People.findBySearch([value]);
      const searchPeople = results.resources.map((item) => item.value);

      return searchPeople;
    } else {
      return [];
    }
  }
}
