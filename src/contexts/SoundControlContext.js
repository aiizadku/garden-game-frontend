import React from 'react';
import CoinClip from '../components/Sound/SoundFiles/CoinClip.wav';


export const SoundControlContext = React.createContext({
  audioHandle: null,
  volumeControl: ()=>{},
  volume: 0,
  isSfxMuted: false,
  setIsSfxMuted: ()=>{}
});

const SoundControlContextProvider = (props) => {
  // SFX Context /////
  const [sfxVolume, setSfxVolume] = React.useState(50);
  const [isSfxMuted, setIsSfxMuted] = React.useState(false);
  const [sfxAudioHandle, setSfxAudioHandle] = React.useState(null);

  React.useEffect(
    ()=>{
      const audio = new Audio(CoinClip);
      audio.volume   = sfxVolume/100;
      audio.autoplay = false;
      audio.loop     = false;
      setSfxAudioHandle(audio);
    }, []
  );

  // Update audio when volume changes.
  React.useEffect(
    ()=>{
      if (sfxAudioHandle)
        sfxAudioHandle.volume = sfxVolume/100;
    }, [sfxVolume, sfxAudioHandle, isSfxMuted]
  );


  return (
    <SoundControlContext.Provider
      value={{
        sfxAudioHandle,
        setSfxVolume,
        sfxVolume,
        isSfxMuted,
        setIsSfxMuted
      }}
    >
      {props.children}
    </SoundControlContext.Provider>
  )
}


export default SoundControlContextProvider

