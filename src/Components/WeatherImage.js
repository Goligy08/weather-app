import React, { Component } from "react";
import "../Styles/WeatherImage.scss";
import brokenclouds from "../Assets/Brokenclouds.svg";
import clearsky from "../Assets/ClearSky.svg";
import fewclouds from "../Assets/FewClouds.svg";
import mist from "../Assets/Mist.svg";
import rain from "../Assets/Rain.svg";
import scatteredclouds from "../Assets/ScatteredClouds.svg";
import showerrain from "../Assets/ShowerRain.svg";
import snow from "../Assets/Snow.svg";
import thunderstorm from "../Assets/Thunderstorm.svg";

const WeatherImage = (props) => {

   const clearSky = props.imageCode === '01d' || props.imageCode === '01n';
   const fewCloud = props.imageCode === '02d' || props.imageCode === '02n' ;
   const scatteredClouds = props.imageCode === '03d' || props.imageCode === '03n' ;
   const brokenClouds = props.imageCode === '04d' || props.imageCode === '04n' ;
   const showerRain = props.imageCode === '09d' || props.imageCode === '09n' ;
   const rainWeather = props.imageCode === '10d' || props.imageCode === '10n' ;
   const thunderStorm = props.imageCode === '11d' || props.imageCode === '11n';
   const snowWeather = props.imageCode === '13d' || props.imageCode === '13n' ;
   const mistWeather = props.imageCode === '50d' || props.imageCode === '50n';
  

    if (props.imageCode === '01n') {
        console.log('this is working!')
    }    
    

    return(
        <>
           { clearSky ? <img className="weather-image" src={clearsky} alt="weather-icon"></img> : null} 

           { fewCloud ? <img className="weather-image" src={fewclouds} alt="weather-icon"></img> : null} 

           { scatteredClouds ? <img className="weather-image" src={scatteredclouds} alt="weather-icon"></img> : null} 

           { brokenClouds ? <img className="weather-image" src={brokenclouds} alt="weather-icon"></img> : null} 

           { showerRain ? <img className="weather-image" src={showerrain} alt="weather-icon"></img> : null} 

           { rainWeather ? <img className="weather-image" src={rain} alt="weather-icon"></img> : null} 

           { thunderStorm ? <img className="weather-image" src={thunderstorm} alt="weather-icon"></img> : null} 

           { snowWeather ? <img className="weather-image" src={snow} alt="weather-icon"></img> : null} 
           
           { mistWeather? <img className="weather-image" src={mist} alt="weather-icon"></img> : null} 

        </>
     
       

    )
}

export default WeatherImage;