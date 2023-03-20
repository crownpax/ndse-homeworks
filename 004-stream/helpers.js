import fs from "fs";
import { Console } from "console";

const stdout = fs.createWriteStream('logs/stdout.log');
const stderr = fs.createWriteStream('logs/stderr.log');

export const logger = new Console({stdout, stderr});

export const getMessageForLogger = (type, inputvalue, randomNumber, text) => {
    return {
        type: type,
        value: inputvalue,
        exept: randomNumber,
        textDescription: text
    }
}

export const getResultMessage = (type, inputvalue, randomNumber, text) => {
    console.log(text);
    logger[type](getMessageForLogger(type, inputvalue, randomNumber, text));
}