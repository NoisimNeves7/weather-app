import React, { useState } from "react";

const Forecast = ({data}) => {
  // console.log(data)
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const today = new Date().getDay();
  const forecastDays = days.slice(today,days.length).concat(days.slice(0,today))
  // console.log(forecastDays);
  
  return <div className="w-full  lg:px-10 px-2 mt-10 mb-10">
    <h1 className=" font-bold text-3xl lg:text-4xl text-white ">Forecast for next 7 Days</h1>
    {data.list.slice(0,7).map((item,index)=>{
      return <div key={index} className="lg:p-5 px-2 lg:px-0 bg-[#cbd5e199] w-full rounded-lg mt-5 flex items-center justify-between">
      <div  className="flex items-center gap-10 ">
      <img className="w-10 lg:w-full" src={`/icons/${data.list[index].weather[0].icon}.png`} alt="" />
      <h1 className="font-bold text-sm lg:text-lg">{forecastDays[index]}</h1>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center gap-4 justify-between">
          <h1 className="text-slate-700 font-semibold text-sm lg:text-base">Feels Like</h1>
          <h1 className="text-slate-600 text-sm lg:text-base">{Math.floor(data.list[0].main.feels_like)}°C</h1>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <h1 className="text-slate-700 font-semibold text-sm lg:text-base">Humidity</h1>
          <h1 className="text-slate-600 text-sm lg:text-base">{data.list[0].main.humidity}%</h1>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <h1 className="text-slate-700 font-semibold text-sm lg:text-base">Pressure</h1>
          <h1 className="text-slate-600 text-sm lg:text-base">{data.list[0].main.pressure}hPa</h1>
        </div>
        
      </div>
      <div className=" flex items-center gap-2">
        <h1 className="capitalize text-sm lg:text-base">{data.list[index].weather[0].description}</h1>
        <h1 className="text-slate-600 text-sm lg:text-base">{Math.floor(data.list[0].main.temp_max)}°C/{Math.floor(data.list[0].main.temp_min)}°C</h1>
      </div>
      </div>
    })}
    
  </div>;
};

export default Forecast;
