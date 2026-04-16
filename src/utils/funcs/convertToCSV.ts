import type { IPeople } from 'swapi-ts';

export const convertToCSV = (data: IPeople[]): string => {
  return data
    .map((item: IPeople) => {
      const header = Object.keys(item);
      const values = Object.values(item);
      return [...header, ...values].join(',');
    })
    .join('\n');
};
