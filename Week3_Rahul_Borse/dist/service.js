"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherDataHtml = exports.transporter = exports.getWeatherDetails = exports.getCoordinates = void 0;
const axios_1 = __importDefault(require("axios"));
// import { User } from "./userModel";
const credentials_1 = require("./credentials");
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: 'Gmail',
    auth: {
        user: credentials_1.EMAIL,
        pass: credentials_1.PASSWORD,
    },
});
exports.transporter = transporter;
const getCoordinates = (city, country) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`, {
        headers: {
            'X-Api-Key': credentials_1.API_KEY
        }
    });
    if (response.data.length > 0) {
        const { latitude, longitude } = response.data[0];
        //   console.log(response.data[0])
        return { latitude, longitude };
    }
    throw new Error('Coordinates not found');
});
exports.getCoordinates = getCoordinates;
const getWeatherDetails = (latitude, longitude) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://weatherapi-com.p.rapidapi.com/current.json`, {
        params: { q: `${latitude},${longitude}` },
        headers: {
            'X-RapidAPI-Key': credentials_1.RapidAPI_Key,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    });
    // if(response.data.length>0){
    // console.log(response.data)
    // }
    return response.data;
});
exports.getWeatherDetails = getWeatherDetails;
const weatherDataHtml = (data) => {
    // console.log(data)
    let htmlData = `
    <table border="1">
    <tr>
        <th>Id</th>
        <th>City</th>
        <th>Country</th>
        <th>Date</th>
        <th>Weather</th>
    </tr>
    ${data.map((item) => (
    // {console.log(item.city)}
    `<tr>
      <td>${item.id}</td>
      <td>${item.city}</td>
      <td>${item.country}</td>
      <td>${item.time}</td>
      <td>${item.weather}</td>
    </tr>`)).join('')}
  </table>`;
    // console.log(htmlData)
    return htmlData;
};
exports.weatherDataHtml = weatherDataHtml;
//# sourceMappingURL=service.js.map