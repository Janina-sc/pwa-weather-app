
import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '6dd2e1cf9f9f8c38425ba99c27c26715';

export const fetchWeather = async(query)=>{ //query va a ser la ciudad cuyo clima buscoexp
    const {data} = await axios.get(URL, {
        params:{
            q:query,
            units: "metric",
            APPID: API_KEY,
        }
        
    });
    console.log(data)
    return data;
}