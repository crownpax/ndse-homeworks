import { createInterface } from 'readline';
import { stdin } from 'process';
import { handler, exitToConsoleInput } from "./utils.js";

const input = createInterface(stdin);

console.log(
    `Для просмотра текущей погоды в городе введите его наименование: \n
    P.S. Для выхода введите "exit"`
    );

input.on('line', (inputData) => handler(inputData, input));
input.on('close', () => exitToConsoleInput());