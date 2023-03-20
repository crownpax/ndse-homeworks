import { createInterface } from 'readline';
import {stdin} from 'process';

import {checkNumber, exitGame} from './utils.js';

const input = createInterface(stdin);

console.log(
    `Загадано число в диапазоне от 1 до 2, попробуйте отгадать! \n
    Есть только одна попытка угадать число! После число пересоздаётся заново. \n
    P.S. Для выхода из игры введите "exit"`
);

input.on('line', (inputData) => checkNumber(inputData, input));
input.on('close', () => exitGame());