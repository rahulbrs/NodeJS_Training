import axios from "axios";
// import { User } from "./userModel";
import { API_KEY, EMAIL, PASSWORD, RapidAPI_Key } from "./credentials";
import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL,
        pass: PASSWORD,
    },
});

const getCoordinates = async (city: string, country: string) => {
    const response = await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`, {
        headers: {
            'X-Api-Key': API_KEY
        }
    });

    if (response.data.length > 0) {
        const { latitude, longitude } = response.data[0];
        //   console.log(response.data[0])
        return { latitude, longitude };
    }
    throw new Error('Coordinates not found');
};

const getWeatherDetails = async (latitude: any, longitude: any) => {
    const response = await axios.get(`https://weatherapi-com.p.rapidapi.com/current.json`, {
        params: { q: `${latitude},${longitude}` },
        headers: {
            'X-RapidAPI-Key': RapidAPI_Key,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })
    // if(response.data.length>0){
    // console.log(response.data)
    // }
    return response.data
}

const weatherDataHtml = (data: any) => {
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
    ${data.map((item: any) => (
        // {console.log(item.city)}
        `<tr>
      <td>${item.id}</td>
      <td>${item.city}</td>
      <td>${item.country}</td>
      <td>${item.time}</td>
      <td>${item.weather}</td>
    </tr>`
    )).join('')
        }
  </table>`
    // console.log(htmlData)
    return htmlData
}
export { getCoordinates, getWeatherDetails, transporter, weatherDataHtml}