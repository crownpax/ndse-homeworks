import { logger, getMessageForLogger } from "./helpers.js";

export const checkNumber = (inputData, input) => {

  const randNumber = String(Math.floor(Math.random() * 2) + 1);
  let text = "";

    if (inputData === "exit") input.close();

    if (isNaN(inputData) || inputData < 0 || inputData > 2) {
      text="Неккоректное введённое значение";
      console.log(`${text}! Введите число в диапозоне от 1 до 2 или "exit" для выхода`);
      logger.error(getMessageForLogger("error", inputData, randNumber, text));
      return;
    }

    if (inputData === randNumber) {
      text= 'Верно! Число отгадано';
      console.log(text);
      logger.log(getMessageForLogger("log", inputData, randNumber, text));
    }
    else {
      text='Не угадал! Попробуй ещё раз';
      console.log(text);
      logger.log(getMessageForLogger("log", inputData, randNumber, text));
    }
  }

export const exitGame = () => {
  console.log('Конец игры');
  return process.exit(0);
}