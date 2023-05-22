import React from "react";
import { useState, useEffect } from "react";
import "../Styles/WeatherApp.scss";
import LocationInfo from "./LocationInfo";
import WeatherOutlook from "./WeatherOutlook";


const WeatherCard = () => {

    const [weather, setWeather] = useState({});
    const [location, setLocation] = useState('')
    

    useEffect(() => {
       getForecast();

    },[])
 

    const getForecast = async (e) => {
        e.preventDefault();

       
        const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=0bb00caf659cfc4be196c1ede0690a3c`);
        const data = await api.json();
        setWeather(data)
        console.log(location)
        

    }
    return(
        <div className="weather-card">
            
            <div className="search-bar">
             <form onSubmit={getForecast}>
                 <input 
                 onChange={(event) => setLocation(event.target.value)}
                 value ={location}
                 className="search-text"
                 placeholder="Enter a city" 
                   >
                </input>
             </form>
             
            
      </div>
           
            <LocationInfo 
               location = {weather.name}
               description = {weather.weather ? weather.weather[0].main : null}
               temperature = {weather.main ? Math.round(weather.main.temp) + '•': null} 
            
            
            />   
            {weather.name != undefined && 
              <WeatherOutlook
               
               feels = {weather.main ? Math.round(weather.main.feels_like) : null}
               humidity = {weather.main ? weather.main.humidity : null}
               wind = {weather.wind? Math.round(weather.wind.speed * 100)/100 : null}
               />
            }
           


        
            
        </div>
    )
}

export default WeatherCard;