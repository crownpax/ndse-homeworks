import fs from "fs";
import { Console } from "console";

const stdout = fs.createWriteStream('logs/stdout.log');
const stderr = fs.createWriteStream('logs/stderr.log');

export const logger = new Console({stdout, stderr});

export const getErrorForLogger = (inputvalue, randomNumber) => {
    return {
        type: "error",
        value: inputvalue,
        exept: randomNumber,
        description: "Неккоректное введённое значение"
    }
}

export const getLogForLogger = (inputvalue, randomNumber, text) => {
    return {
        type: "log",
        value: inputvalue,
        exept: randomNumber,
        description: text
    }
}