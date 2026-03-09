export class ReceiveService {
  #people: string = 'https://swapi.dev/api/people/';

  static #instance: ReceiveService;

  private constructor() {
    ReceiveService.#instance = new ReceiveService();
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
