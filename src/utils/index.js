/**
 * Возвращает случайное целое число между min (включительно) и max (не включая max)
 * @param { number } min
 * @param { number } max
 * @returns { number }
 */
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
