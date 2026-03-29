export const getCounts = (num: number): number[] => {
  return Array.from({ length: Math.ceil(num / 10) }, (_, i) => i + 1);
};
