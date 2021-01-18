import Sky from "../components/Sky/Sky";
import Ground from "../components/Ground/Ground";
import { makeStyles } from "@material-ui/core";
import TestButton from "../components/TestButton/TestButton";
import React, { useEffect, useState } from "react";
import getIP from "../api/LocationApi";
import SoundControls from "../components/Sound/SoundControls";
import getWeather from "../api/WeatherApi";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
  },
});

const GardenPage = (props) => {
  const [userState, setUserState] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState({ error: false, message: null });

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
  console.log('my location: ',city, userState);

  // useEffect(() => {
  //   setWeather("tornado");
  // },[]);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Sky weather={weather} />
      {/*<TestButton />*/ null}
      <Ground />
      <SoundControls />
    </div>
  );
};

export default GardenPage;
