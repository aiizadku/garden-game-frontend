import Sky from "../components/Sky/Sky";
import Ground from "../components/Ground/Ground";
import { makeStyles } from "@material-ui/core";
import TestButton from "../components/TestButton/TestButton";
import getLocation from "../api/LocationApi";
import React, { useEffect, useState } from "react";
import getIP from "../api/LocationApi";
import SoundControls from "../components/Sound/SoundControls";
import CoinClip from "../components/Sound/SoundFiles/CoinClip.wav";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
  },
});

// Create context
// Gives { Provider, Consumer }
export const SfxPlayerContext = React.createContext();

const GardenPage = (props) => {
  // const [userState, setUserState] = useState("");
  // const [city, setCity] = useState("");
  // const [error, setError] = useState({ error: false, message: null });

  // useEffect(() => {
  //   getIP();
  // });

  
  // SFX Context /////
  const [sfxVolume, setSfxVolume] = React.useState(100);
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
        <Sky />
        {/* <TestButton /> */}
        <Ground />
        <SoundControls />
      </SfxPlayerContext.Provider>
    </div>
  );
};


export default GardenPage;
