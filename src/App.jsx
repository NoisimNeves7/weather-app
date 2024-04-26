import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import axios from './utils/axios'
import CurrentWeather from './components/CurrentWeather'
import { weatherInstance } from './utils/axios'
import { WEATHER_KEY } from './utils/constants'
import Forecast from './components/Forecast'
import UserWeather from './components/UserWeather'

const App = () => {

  const [longitude, setlongitude] = useState(null);
  const [latitude, setlatitude] = useState(null);
  const [weather, setweather] = useState(null)
  const [forecast, setforecast] = useState(null)
  const [forecastLoading, setforecastLoading] = useState(false);
  const [city, setCity] = useState(null);

  const getSearchData = (data) =>{
    setlongitude(data.longitude)
    setlatitude(data.latitude)
    setweather({city:data.city,regionCode:data.regionCode})
  }

  

  const getSearchWeatherData = async()=>{
    try {
      const {data} = await weatherInstance.get(`weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}&units=metric`)
      setweather({...weather,weatherData:data})
      

    } catch (error) {
      console.log("error:"+error)
    }
  }
  // console.log(weather)

  const getForecastData = async()=>{
    try {
      setforecastLoading(true)
      const {data} = await weatherInstance.get(`forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}&units=metric`)
      setforecast(data);
      setforecastLoading(false)
    } catch (error) {
      console.log("error:"+error)
    }
  }
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      getSearchWeatherData();
      getForecastData();
    }
  }, [latitude, longitude]);
  
  return (
    <div

    style={{
      backgroundImage: weather && weather.weatherData ? `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.5),rgba(0,0,0,.6)), url(/background/${weather.weatherData.weather[0].icon}.jpg)` : `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.5),rgba(0,0,0,.6)), url(/background/default.avif)`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}




     className='w-screen h-screen bg-slate-200 overflow-y-auto overflow-x-hidden'>
      <Search getSearchData={getSearchData}/>
      {weather && <CurrentWeather data={weather} city={city}/>}
      {!forecastLoading && forecast && <Forecast data={forecast}/>}
      {!weather  && <UserWeather latitude={latitude} setlatitude={setlatitude} longitude={longitude} setlongitude={setlongitude} city={city} setCity={setCity}/>}
    </div>
  )
}

export default App