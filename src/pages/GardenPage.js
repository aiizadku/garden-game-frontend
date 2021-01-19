import Sky from "../components/Sky/Sky";
import Ground from "../components/Ground/Ground";
import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import getIP from "../api/LocationApi";
import CoinClip from "../components/Sound/SoundFiles/CoinClip.wav";
import getWeather from "../api/WeatherApi";
import SoundControls from '../components/Sound/SoundControls.js'

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    overflow: 'hidden'
  },
});

// Create context
// Gives { Provider, Consumer }
export const SfxPlayerContext = React.createContext();

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

  // console.log('my location: ',city, userState);

  // useEffect(() => {
  //   setWeather("Snow");
  // },[]);

  
  // SFX Context /////
  const [sfxVolume, setSfxVolume] = React.useState(50);
  const [isSfxMuted, setIsSfxMuted] = React.useState(false);
  const audio = new Audio(CoinClip);
  audio.volume   = sfxVolume/100;
  audio.autoplay = false;
  audio.loop     = false;
  const [sfxAudioHandle, setSfxAudioHandle] = React.useState(audio);

  const providerObj = {
    audioHandle:sfxAudioHandle,
    volumeControl: setSfxVolume,
    volume: sfxVolume,
    isSfxMuted: isSfxMuted,
    setIsSfxMuted: setIsSfxMuted
  };

  // Update audio when volume changes.
  React.useEffect(
    ()=>{
      sfxAudioHandle.volume = sfxVolume/100;
    }, [sfxVolume, sfxAudioHandle, isSfxMuted]
  );


  // getLocation();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SfxPlayerContext.Provider value={providerObj}>
        <Sky weather={weather} />
        {/* <TestButton /> */}
        <Ground {...props}/>
        <SoundControls />
      </SfxPlayerContext.Provider>
    </div>
  );
};

export default GardenPage;
