import React from 'react';
import SnowStorm from 'react-snowstorm';
import RainStorm from 'react-rain-animation';
import "react-rain-animation/lib/style.css";


// Props contains weather
const WeatherOverlay = props => {


  const selectWeather = (input) => {
    if (input === "Snow") {
      return(<SnowStorm />);
    }
    if (input === "Rain") {
      return(<RainStorm numDrops="300"/>)
    }
    if (input === "Cloud") {
      return(null);
    }
    else {
      return(null);
    }
  };

  return(
    <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, pointerEvents: "none"}}>
      { selectWeather(props.weather) }
    </div>
  );
};


export default WeatherOverlay;
