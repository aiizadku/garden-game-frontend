import Sky from "../components/Sky/Sky";
import Ground from "../components/Ground/Ground";
import { makeStyles } from "@material-ui/core";
import TestButton from "../components/TestButton/TestButton";
import getLocation from "../api/LocationApi";
import React, { useEffect, useState } from "react";
import getIP from "../api/LocationApi";
import SoundControls from "../components/Sound/SoundControls";
import CoinSound from "../components/Sound/SoundFiles/Coin.wav";

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
  const [sfxVolume, setSfxVolume] = React.useState(1);
  const SfxAudioHandle = new Audio(CoinSound);
  SfxAudioHandle.volume   = sfxVolume;
  SfxAudioHandle.autoplay = false;
  SfxAudioHandle.loop     = false;
  // const sfxPlayerContextData = {
  //   "handle": SfxAudioHandle,
  //   "setSfxVolume": setSfxVolume,
  // };


  // getLocation();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SfxPlayerContext.Provider value={SfxAudioHandle}>
        <Sky />
        {<TestButton />}
        <Ground />
        <SoundControls />
      </SfxPlayerContext.Provider>
    </div>
  );
};


export default GardenPage;
