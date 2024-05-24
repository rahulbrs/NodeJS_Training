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
const express_1 = __importDefault(require("express"));
const service_1 = require("./service");
const credentials_1 = require("./credentials");
const weatherModel_1 = require("./weatherModel");
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get('/nodemailer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield service_1.transporter.sendMail({
            from: credentials_1.EMAIL,
            to: 'rahulbrs.testmail@gmail.com',
            subject: 'NodeMailer Program',
            text: "This is NodeMailer testing mail"
        });
        console.log(response);
        if (response.messageId) {
            console.log("Mail sended Successfully");
            res.send({ message: "Mail sended Successfully", response });
        }
        else {
            console.log("Mail sending Failed");
            res.send({ message: "Mail sending Failed", response });
        }
    }
    catch (error) {
        console.log(error);
    }
}));
app.post('/api/SaveWeatherMapping', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = req.body;
    // console.log(data)
    try {
        data.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const { city, country } = item;
            const { latitude, longitude } = yield (0, service_1.getCoordinates)(item.city, item.country);
            const weatherData = yield (0, service_1.getWeatherDetails)(latitude, longitude);
            const time = new Date();
            // console.log(city, country)
            // console.log(latitude, longitude)
            // console.log(weatherData)
            // console.log(time)
            console.log({ city, country, weather: weatherData.current.condition.text, time, longitude, latitude });
            yield weatherModel_1.Weather.create({ city, country, weather: weatherData.current.condition.text, time, longitude, latitude });
        }));
        res.status(200).json({ message: "Weather Data is fetched and Saved Successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetched and Save WeatherData" });
    }
}));
// const getCoordinates = async (city: string, country: string) => {
//     const response = await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`, {
//         headers: {
//             'X-Api-Key': API_KEY
//         }
//     });
//     if (response.data.length > 0) {
//         const { latitude, longitude } = response.data[0];
//         //   console.log("---------------")
//         //   console.log(response.data[0])
//         //   console.log("---------------")
//         return { latitude, longitude };
//     }
//     throw new Error('Coordinates not found');
// };
// const getWeatherDetails = async (latitude: any, longitude: any) => {
//     const response = await axios.get(`https://weatherapi-com.p.rapidapi.com/current.json`, {
//         params: { q: `${latitude},${longitude}` },
//         headers: {
//             'X-RapidAPI-Key': RapidAPI_Key,
//             'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//         }
//     })
//     // if(response.data.length>0){
//     // console.log("+++++++++++++++++++")
//     // console.log(response.data)
//     // console.log("+++++++++++++++++++")
//     // }
//     return response.data
// }
app.get(`/api/weatherDashboard`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city = req.query.city;
    // console.log(city)
    if (city) {
        const cityWeather = yield weatherModel_1.Weather.findAll({ where: { city } });
        // console.log(cityWeather)
        res.json(cityWeather);
    }
    else {
        const cityWeather = yield weatherModel_1.Weather.findAll({ order: [['time', 'DESC']] });
        console.log("City Weather - ", cityWeather);
        res.json(cityWeather);
    }
}));
app.post(`/api/mail-weather-data`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        console.log(data);
        const response = yield service_1.transporter.sendMail({
            from: credentials_1.EMAIL,
            to: 'rahulbrs.testmail@gmail.com',
            subject: 'Weather Data',
            html: (0, service_1.weatherDataHtml)(data)
        });
        console.log(response);
        if (response.messageId) {
            console.log("Mail sended Successfully");
            res.send({ message: "Mail sended Successfully" });
        }
        else {
            console.log("Mail sending Failed");
            res.send({ message: "Mail sending Failed" });
        }
    }
    catch (error) {
        console.log(error);
    }
}));
//# sourceMappingURL=app.js.map