export const getRandomMinMax = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
};
