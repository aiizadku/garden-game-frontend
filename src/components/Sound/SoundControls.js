import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import BackgroundMusicLoop from "./SoundFiles/BackgroundMusicLoop.wav";
import { Slider } from "@material-ui/core";
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "75px 75px",
    gridTemplateRows: "25px 25px 120px 25px",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 150,
    height: 200,
    borderRadius: "4px",
    border: "4px solid #7B3503",
    backgroundColor: 'tan',
    borderTopLeftRadius: 8
  },
  leftColumn: {
    marginLeft: "15px"
  },
  rightColumn: {
    marginRight: "15px"
  }
})

const SoundControls = props => {
  const classes = useStyles();
  const [useMusic, setUseMusic] = React.useState(true);
  const [audioHandle, setAudioHandle] = React.useState(null);
  const [volume, setVolume] = React.useState(50);

  React.useEffect(
    ()=> {
      let audio = new Audio(BackgroundMusicLoop);
      audio.autoplay = true;
      audio.loop = true;
      audio.volume= 0.5;
      setAudioHandle(audio);
    }, []
  );

  // Updates volume in audioHandle
  // audioHandle requires 0 to 1, but volume is 0 to 100
  React.useEffect(
    ()=> {
      if(audioHandle)
        audioHandle.volume = volume/100;
    }, [volume, audioHandle]
  );

  const toggleMusic = () => {
    // Turn off music
    setUseMusic(!useMusic);
  }

  React.useEffect(
    ()=>{
      if (audioHandle) {
        if (useMusic) audioHandle.play();
        else audioHandle.pause();
      }
    }, [useMusic, audioHandle]
  );

  const renderAudioIcon = (onClickFunction) => {
    // If music is disabled, show volume off icon
    if (!useMusic)
      return <VolumeOffIcon onClick={onClickFunction} />
    // If music is turned down to 0, show mute icon
    if (volume === 0)
      return <VolumeMuteIcon onClick={onClickFunction} />
    // If music is on, but less than 60, show volume down icon
    if (volume <= 60)
      return <VolumeDownIcon onClick={onClickFunction} />
    // Else, the volume is turned up. Show volume up icon
    else
      return <VolumeUpIcon onClick={onClickFunction} />
  };


  return(
    <Box className={classes.root}>
      {/* Sound title bar //////////*/}
      <Box style={{
        gridColumn: "1 / 3",
        gridRow:    "1 / 2",
        backgroundColor: "saddlebrown",
        borderBottom: "4px solid #7B3503"
      }}>
        Sound
      </Box>


      {/* BGM //////////*/}
      <Box
        style={{
          gridRow: "2 / 3",
          gridColumn: "1 / 2"
        }}
        className={classes.leftColumn}
      >
        BGM
      </Box>

      <Box
        style={{
          gridRow: "3 / 4",
          gridColumn: "1 / 2",
          padding: "8px"
        }}
        className={classes.leftColumn}
      >
        <Slider
          value={volume}
          className={classes.volumeSlider}
          onChange={(e,value)=>setVolume(value)}
          orientation="vertical"
        />
      </Box>

      <Box
        style={{
          gridRow: "4 / 5",
          gridColumn: "1 / 2"
        }}
        className={classes.leftColumn}
      >
        {renderAudioIcon(toggleMusic)}
      </Box>


      {/* SFX //////////*/}
      <Box
        style={{
          gridRow: "2 / 3",
          gridColumn: "2 / 3"
        }}
        className={classes.rightColumn}
      >
        SFX
      </Box>

      <Box
        style={{
          gridRow: "3 / 4",
          gridColumn: "2 / 3",
          padding: "8px"
        }}
        className={classes.rightColumn}
      >
        <Slider
          value="0"
          className={classes.volumeSlider}
          onChange={()=>{}}
          orientation="vertical"
        />
      </Box>

      <Box
        style={{
          gridRow: "4 / 5",
          gridColumn: "2 / 3"
        }}
        className={classes.rightColumn}
      >
        {<VolumeOffIcon />}
      </Box>
    </Box>
  );
};


export default SoundControls;
