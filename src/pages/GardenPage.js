import Sky from "../components/Sky/Sky";
import Ground from "../components/Ground/Ground";
import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import getIP from "../api/LocationApi";
import getWeather from "../api/WeatherApi";
import WeatherOverlay from "../components/WeatherOverlay/WeatherOverlay";

const useStyles = makeStyles({
  container: {
    position: "relative",
    textAlign: "center",
    overflow: 'hidden',
    maxWidth: 1200,
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto"
  },
});

const GardenPage = (props) => {
  const [userState, setUserState] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    getIP().then((json) => {
      setUserState(json.region);
      setCity(json.city);
    });
  }, []);

  useEffect(() => {
    getWeather(city, userState).then((data) => {
      // console.log(data)
      setWeather(data);
    });
  }, [city]);

  // console.log('my location: ',city, userState);

  // useEffect(() => {
  //   setWeather("Snow");
  // },[]);

  
  


  // getLocation();
  const classes = useStyles();
  return (
      <div className={classes.container}>
        <Sky weather={weather} />
        <Ground {...props}/>
        <WeatherOverlay weather={weather} />
      </div>
  );
};

export default GardenPage;
