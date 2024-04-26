import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const UserWeather = ({latitude,longitude,setlatitude,setlongitude,city,setCity}) => {
 
  // console.log(latitude,longitude,city)
  useEffect(() => {
    const fetchData = async () => {
      if (latitude === null && longitude === null && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setlatitude(position.coords.latitude);
            setlongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Error getting geolocation:", error);
          }
        );
      }

      if (latitude !== null && longitude !== null) {
        try {
          const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
         setCity(response.data.address.county)
        //  console.log(response.data.address.county)
        } catch (error) {
          console.error("Error fetching city name:", error);
        }
      }
    };

    fetchData();
  }, [latitude, longitude,setCity]);

  return (
    <div className='text-4xl text-white flex items-center justify-center'>Allow Location Access To Get Your City Data</div>
  );
};

export default UserWeather;