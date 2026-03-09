import type { IPeople } from './people.interface';

export interface ICard {
  name: IPeople['name'];
  gender: IPeople['gender'];
  birth_year: IPeople['birth_year'];
  hair_color: IPeople['hair_color'];
  skin_color: IPeople['skin_color'];
  eye_color: IPeople['eye_color'];
}
