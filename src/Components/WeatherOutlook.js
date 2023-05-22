import React from "react";
import "../Styles/WeatherOutlook.scss";



const WeatherOutlook = (props) => {

   console.log(props.name)
   console.log(props.feels)
   console.log(props.humidity)
    return (
        <div className="weather-outlook">
         <h2>Weather Outlook</h2>

         <div className="glyph-container">

         <div className="info-glyph">
            
            <span>{props.feels}•</span>
            <h4>Feels like</h4>
         </div>

         <div className="info-glyph">
            <span>{props.humidity}%</span>
            <h4>Humidity</h4>
         </div>

         <div className="info-glyph">
            <span>{props.wind}</span>
            <h4>Wind Speed</h4>
         </div>
	
         </div>
       

        </div>
    )
}

export default WeatherOutlook;