import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Slider } from "@material-ui/core";
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { SoundControlContext } from '../../contexts/SoundControlContext';
import gsap from 'gsap';

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
});

const SoundControls = props => {
  const classes = useStyles();

  const {
    sfxAudioHandle, sfxVolume, setSfxVolume, isSfxMuted, setIsSfxMuted,
    bgmAudioHandle, bgmVolume, setBgmVolume, isBgmMuted, setIsBgmMuted
  } = React.useContext(SoundControlContext);

  const renderAudioIcon = (volume, isMuted, onClickFunction) => {
    // If music is disabled, show volume off icon
    if (isMuted)
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

  const toggleMusic = () => {
    if (isBgmMuted)
      setIsBgmMuted(false);
    else
      setIsBgmMuted(true);
  }
  const toggleSfx = () => {
    if (isSfxMuted)
      setIsSfxMuted(false);
    else
      setIsSfxMuted(true);
  }


  // Open and close Animation //////
  // Start open
  const [isOpen, setIsOpen] = React.useState(true);
  const [yOffset, setYOffset] = React.useState(0);

  const toggleOpen = () => {
    if (isOpen) {
      // Close box
      console.log("closing Sound Control box");
      setIsOpen(false);
      setYOffset(180);
    }
    else {
      // Open box
      console.log("opening Sound Control box");
      setIsOpen(true);
      setYOffset(0);
    }
  };

  React.useEffect(
    ()=>{
      // Play animation
      gsap.to("#SoundControlBox", {
        duration: 0.5,
        y: yOffset
      });
    }, [isOpen, yOffset]
  );



  return(
    <Box className={classes.root} id="SoundControlBox">
      {/* Sound title bar //////////*/}
      <Box style={{
          gridColumn: "1 / 3",
          gridRow:    "1 / 2",
          backgroundColor: "saddlebrown",
          borderBottom: "4px solid #7B3503"
        }}
        onClick={toggleOpen}

      >
        Sound Options
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
          value={bgmVolume} // 0 to 100
          className={classes.volumeSlider}
          onChange={(e,value)=>{console.log("setting bgm volume");setBgmVolume(value);}}
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
        {renderAudioIcon(bgmVolume, isBgmMuted, toggleMusic)}
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
          value={sfxVolume} // 0 to 100
          className={classes.volumeSlider}
          onChange={(e,value)=>setSfxVolume(value)}
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
        {renderAudioIcon(sfxVolume, isSfxMuted, toggleSfx)}
      </Box>
    </Box>
  );
};


export default SoundControls;
