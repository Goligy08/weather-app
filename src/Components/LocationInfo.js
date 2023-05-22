import React, { useEffect } from "react";
import "../Styles/LocationInfo.scss";

const LocationInfo = (props) => {

    const getCalender= new Date()
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',' Thursday','Friday','Saturday'];
    const months = ['January', 'February', 'March' ,'April', 'May','June', 'July', 'August','September','October','November','December'];

    const day = weekDay[getCalender.getDay()];
    const month = months[getCalender.getMonth()];
    const date = getCalender.getDate();
    const hour = getCalender.getHours();
    const min = getCalender.getMinutes();



    return (
        <div className="location-info">
            <div className="date-time">
                
            <h2>Weather Now</h2>
            <h3><span>Today, {day} {date} {month}  {hour}:{min}</span></h3>
       
            </div>

            <div className="location-data">
            <h1><span>{props.location}</span></h1>
            
            <h3><span>{props.description}</span></h3>
            </div>

            <div className="temperature">
            <h1><span>{props.temperature}</span></h1>
            </div>
        </div>
    )
}

export default LocationInfo;