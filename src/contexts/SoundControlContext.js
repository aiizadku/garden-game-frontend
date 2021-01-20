import React from 'react';
import CoinClip from '../components/Sound/SoundFiles/CoinClip.wav';
import BackgroundMusicLoop from '../components/Sound/SoundFiles/BackgroundMusicLoop.wav';


export const SoundControlContext = React.createContext({
  audioHandle: null,
  volumeControl: ()=>{},
  volume: 0,
  isSfxMuted: false,
  setIsSfxMuted: ()=>{}
});

const SoundControlContextProvider = (props) => {
  // SFX Variables /////
  const [sfxVolume, setSfxVolume]   = React.useState(50);
  const [isSfxMuted, setIsSfxMuted] = React.useState(false);
  const [sfxAudioHandle, setSfxAudioHandle] = React.useState(null);
  // BGM Variables //////
  const [bgmVolume, setBgmVolume]   = React.useState(50);
  const [isBgmMuted, setIsBgmMuted] = React.useState(false);
  const [bgmAudioHandle, setBgmAudioHandle] = React.useState(null);

  // Control playback to start only in gardenpage
  const [startBgm, setStartBgm] = React.useState(false);

  // Play bgm when signalled to start
  React.useEffect(
    ()=>{
      if (bgmAudioHandle)
        bgmAudioHandle.play()
    }, [startBgm]
  );


  // UseEffect: Initial Load /////
  React.useEffect(
    ()=>{
      // SFX initialize
      const audio    = new Audio(CoinClip);
      audio.volume   = 0.5;
      audio.autoplay = false;
      audio.loop     = false;
      setSfxAudioHandle(audio);
      // BGM initialize
      const bgm    = new Audio(BackgroundMusicLoop);
      bgm.volume   = 0.5;
      bgm.autoplay = false;
      bgm.loop     = true;
      setBgmAudioHandle(bgm);
    }, []
  );

  // Update SFX when volume changes.
  React.useEffect(
    ()=>{
      if (sfxAudioHandle) {
        console.log(`Setting sfx volume to ${sfxVolume}.`)
        sfxAudioHandle.volume = sfxVolume/100;
      }
    }, [sfxVolume, sfxAudioHandle, isSfxMuted]
  );

  // Update BGM when volume changes.
  React.useEffect(
    ()=>{
      if (!startBgm)
        return;
      if (bgmAudioHandle) {
        console.log(`Setting bgm volume to ${bgmVolume}.`)
        bgmAudioHandle.volume = bgmVolume/100;
        if (isBgmMuted)
          bgmAudioHandle.pause();
        else if (!isBgmMuted && bgmAudioHandle.paused)
          bgmAudioHandle.play();
      }
    }, [bgmVolume, bgmAudioHandle, isBgmMuted]
  );

  return (
    <SoundControlContext.Provider
      value={{
        sfxAudioHandle, sfxVolume, setSfxVolume, isSfxMuted, setIsSfxMuted,
        bgmAudioHandle, bgmVolume, setBgmVolume, isBgmMuted, setIsBgmMuted,
        setStartBgm
      }}
    >
      {props.children}
    </SoundControlContext.Provider>
  )
}


export default SoundControlContextProvider

