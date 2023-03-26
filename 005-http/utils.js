import { getCityWeather } from "./api.js";

export const handler = (inputData, input) => {
    if (inputData === "exit") input.close();
    getCityWeather(inputData);
}

export const exitToConsoleInput = () => {
    console.log('Closing...');
    return process.exit(0);
}