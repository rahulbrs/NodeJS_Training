import express, { Request, Response } from 'express';
import { getCoordinates, getWeatherDetails, transporter, weatherDataHtml } from './service'

import { EMAIL } from './credentials';
import { Weather } from './weatherModel';

const app = express();
const port = 8000;

app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.get('/nodemailer', async (req: Request, res: Response) => {
    try {
        const response = await transporter.sendMail({
            from: EMAIL,
            to: 'rahulbrs.testmail@gmail.com',
            subject: 'NodeMailer Program',
            text: "This is NodeMailer testing mail"
        });
        console.log(response)
        if (response.messageId) {
            console.log("Mail sended Successfully")
            res.send({ message: "Mail sended Successfully", response })
        } else {
            console.log("Mail sending Failed")
            res.send({ message: "Mail sending Failed", response })
        }
    } catch (error) {
        console.log(error)
    }
})

app.post('/api/SaveWeatherMapping', async (req: Request, res: Response) => {
    const { data } = req.body
    // console.log(data)

    try {
        data.map(async (item: any) => {
            const { city, country } = item;
            const { latitude, longitude } = await getCoordinates(item.city, item.country);
            const weatherData = await getWeatherDetails(latitude, longitude)
            const time = new Date();
            // console.log(city, country)
            // console.log(latitude, longitude)
            // console.log(weatherData)
            // console.log(time)
            console.log({ city, country, weather: weatherData.current.condition.text, time, longitude, latitude })
            await Weather.create({ city, country, weather: weatherData.current.condition.text, time, longitude, latitude })
        })
        res.status(200).json({ message: "Weather Data is fetched and Saved Successfully" })
    } catch (error) {
        res.status(500).json({ message: "Failed to fetched and Save WeatherData" })
    }
})
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


app.get(`/api/weatherDashboard`, async (req: Request, res: Response) => {
    const city: any = req.query.city
    // console.log(city)
    if (city) {
        const cityWeather = await Weather.findAll({ where: { city } });
        // console.log(cityWeather)
        res.json(cityWeather)
    } else {
        const cityWeather = await Weather.findAll({ order: [['time', 'DESC']] });
        console.log("City Weather - ", cityWeather)
        res.json(cityWeather)
    }
})

app.post(`/api/mail-weather-data`, async (req: Request, res: Response) => {
    const data = req.body;
    try {
        console.log(data)
        const response = await transporter.sendMail({
            from: EMAIL,
            to: 'rahulbrs.testmail@gmail.com',
            subject: 'Weather Data',
            html: weatherDataHtml(data)
        });
        console.log(response)
        if (response.messageId) {
            console.log("Mail sended Successfully")
            res.send({ message: "Mail sended Successfully"})
        } else {
            console.log("Mail sending Failed")
            res.send({ message: "Mail sending Failed"})
        }
    } catch (error) {
        console.log(error)
    }
})

