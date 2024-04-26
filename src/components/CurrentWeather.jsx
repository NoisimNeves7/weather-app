import React, { useEffect, useState } from "react";
import loading from '/loading.gif'

const CurrentWeather = ({data,city}) => {
// console.log(city)

console.log(data)
console.log()


  if (!data || !data.weatherData || !data.weatherData.weather || !data.weatherData.main) {
    // If data or its nested properties are missing, render a placeholder or handle the case appropriately
    return <div className="w-screen flex justify-center">
      <img className=" w-1/2" src={loading} alt="" />
    </div>;
  }
  
  return (
    <div className="w-screen flex justify-center p-2 lg:p-0">
      <div className="h-64 w-96 bg-[#2d2d2da0] px-7 rounded-lg ">
        <div className="flex justify-between ">
          <div className=" text-white mt-7">
          <h1 className="font-bold text-xl">{data.city ? `${data.city}, ${data.regionCode}` : city}</h1>

            <p className="text-sm capitalize">{data.weatherData.weather[0].description}</p>
          </div>
          <img src={`/icons/${data.weatherData.weather[0].icon}.png`} alt="" />
        </div>
        <div className="flex justify-between  text-white">
          <div className="text-6xl font-bold" >{Math.floor(data.weatherData.main.temp )}°C</div>
          <div className=" flex flex-col w-1/2  ">
            <div className="font-bold">Details</div>
            <div className="flex text-xs justify-between ">
              <h1>Feels Like </h1>
              <h1 className="font-bold"> {Math.floor(data.weatherData.main.feels_like )}°C</h1>
            </div>
            <div className="flex text-xs justify-between">
              <h1>Wind </h1>
              <h1 className="font-bold">2 m/s</h1>
            </div>
            <div className="flex text-xs justify-between">
              <h1>Humidity </h1>
              <h1 className="font-bold">{data.weatherData.main.humidity}%</h1>
            </div>
            <div className="flex text-xs justify-between">
              <h1>Pressure </h1>
              <h1 className="font-bold">{data.weatherData.main.pressure}hPa</h1>
            </div>
            <div className="flex text-xs justify-between">
              <h1>Sunrise </h1>
              <h1 className="font-bold">{new Date(data.weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' })}</h1>
            </div>
            <div className="flex text-xs justify-between">
              <h1>Sunset </h1>
              <h1 className="font-bold">{new Date(data.weatherData.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' })}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
