import { getResultMessage } from "./helpers.js";

export const checkNumber = (inputData, input) => {

  const randNumber = String(Math.floor(Math.random() * 2) + 1);

  let options = [];

    if (inputData === "exit") input.close();

    if (isNaN(inputData) || !["1","2"].includes(inputData)) {
      options = [
        "error",
        inputData,
        randNumber,
        'Неккоректное введённое значение! Введите число в диапозоне от 1 до 2 или "exit" для выхода'
      ];

      getResultMessage(...options);
      return;
    }

    if (inputData === randNumber) {
      options = [
        "log",
        inputData,
        randNumber,
        'Верно! Число отгадано'
      ];

      getResultMessage(...options);
    }
    else {
      options = [
        "log",
        inputData,
        randNumber,
        'Не угадал! Попробуй ещё раз'
      ];

      getResultMessage(...options);
    }
  }

export const exitGame = () => {
  console.log('Конец игры');
  return process.exit(0);
}