import { createInterface } from 'readline';
import {stdin} from 'process';
import http from 'http';
import * as dotenv from 'dotenv';
import {API_KEY, URL, APIPath} from "./config.js";

dotenv.config();

const input = createInterface(stdin);

console.log('Для просмотра текущей погоды в городе введите его наименование: ');

input.on('line', (inputData) => getCityWeather(inputData));

const getCityWeather = (inputData) => {

    const currentURL =`${URL}/${APIPath.current}?access_key=${API_KEY}&query=${inputData}`;

    http.get(currentURL, (res) => {

        const {statusCode} = res;

        if (statusCode !== 200){
            console.log({statusCode: `${statusCode}`});
            return;
        }

        res.setEncoding('utf8');
        let rowData = ''
        res.on('data', (chunk) => rowData += chunk)
        res.on('end', () => {
            let parseData = JSON.parse(rowData)
            console.log(parseData)
        })
    }).on('error', (err) => {
        console.error(err)
    })
}