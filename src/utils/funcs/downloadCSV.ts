import type { IPeople } from 'swapi-ts';
import { convertToCSV } from './convertToCSV';

export const downloadCSV = (data: IPeople[]): string => {
  const csv = convertToCSV(data);
  console.log(csv);

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  return url;
};
