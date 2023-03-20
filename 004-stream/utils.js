import { logger, getErrorForLogger, getLogForLogger } from "./helpers.js";

export const checkNumber = (inputData, input) => {

  const randNumber = String(Math.floor(Math.random() * 2) + 1);
  let text = "";

    if (inputData === "exit") input.close();

    if (isNaN(inputData) || inputData < 0 || inputData > 2) {
      console.log('Некорректное значение! Введите число в диапозоне от 1 до 2 или "exit" для выхода');
      logger.error(getErrorForLogger(inputData, randNumber));
      return;
    }

    if (inputData === randNumber) {
      text= 'Верно! Число отгадано';
      console.log(text);
      logger.log(getLogForLogger(inputData, randNumber, text));
    }
    else {
      text='Не угадал! Попробуй ещё раз';
      console.log(text);
      logger.log(getLogForLogger(inputData, randNumber, text));
    }
  }

export const exitGame = () => {
  console.log('Конец игры');
  return process.exit(0);
}