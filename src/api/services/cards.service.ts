import type { ICard } from '@/types/card.interface';
import type { IPeople } from '@/types/people.interface';

export class CardsService {
  getDefaultCard(people: IPeople): ICard {
    return {
      name: people.name,
      gender: people.gender,
      birth_year: people.birth_year,
      hair_color: people.hair_color,
      skin_color: people.skin_color,
      eye_color: people.eye_color,
    };
  }
}

export default CardsService;
