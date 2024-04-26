import axios from "axios";

const instance = axios.create({
    baseURL:'https://wft-geo-db.p.rapidapi.com/v1/geo/',
    headers: {
        'X-RapidAPI-Key': '11328d657amsh4407939648b1916p1890afjsn129338989214',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
})
const weatherInstance = axios.create({
  baseURL:'https://api.openweathermap.org/data/2.5/',
})



export default instance;


export {weatherInstance};