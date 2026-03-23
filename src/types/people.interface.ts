import type { IPeople } from 'swapi-ts';

export interface ResponsePeople {
  count: number;
  next: string;
  previous: null;
  results: IPeople[];
}
