import http from "http";
import { API_KEY, URL, APIPath } from "./config.js";

export const getCityWeather = (inputData) => {

    const currentURL =`${URL}/${APIPath.current}?access_key=${API_KEY}&query=${inputData}`;

    http.get(currentURL, (res) => {

        const {statusCode} = res;

        if (statusCode !== 200){
            console.log({statusCode: `${statusCode}`, desc: "you have got some problems"});
            return;
        }

        res.setEncoding('utf8');
        let rowData = '';
        res.on('data', (chunk) => rowData += chunk);
        res.on('end', () => {
            let parseData = JSON.parse(rowData);
            console.log(parseData);
        })
    }).on('error', (err) => {
        throw new Error (err);
    })
}