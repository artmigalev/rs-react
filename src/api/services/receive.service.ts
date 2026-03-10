import type { IPeople, ResponsePeople } from '@/types/people.interface';

export class ReceiveService {
  #people: string = 'https://swapi.dev/api/people/';
  #data: ResponsePeople | null = null;

  static #instance: ReceiveService;

  private constructor() {}

  async init() {
    const response = await this.getPeopleAll<ResponsePeople>();
    this.#data = response;
  }

  getResults(): IPeople[] | null {
    if (this.#data) {
      return this.#data?.results;
    }
    return null;
  }

  getPeopleBySearchValue(value: string): IPeople[] | [] {
    const results = this.#data?.results;
    if (results) {
      return results.filter((item: IPeople) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    }
    return [];
  }

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new ReceiveService();
    }
    return this.#instance;
  }

  async getPeopleAll<T>(): Promise<T> {
    const response = await fetch(this.#people);
    return response.json();
  }
  async getPeople<T>(index: number): Promise<T> {
    const response = await fetch(`${this.#people}/${index}`);
    return response.json();
  }
}
