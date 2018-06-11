import Noty from "noty";

/**
 * Возвращает случайное целое число между min (включительно) и max (не включая max)
 * @param { number } min
 * @param { number } max
 * @returns { number }
 */
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const notify = (type, text) => {
  new Noty({
    theme: "bootstrap-v4",
    text: text,
    type: type,
    timeout: 3000,
    progressBar: false
  }).show();
};
