import React, { useContext } from "react";
import { Button } from "@material-ui/core"
import { harvestPlant, getSeeds, loadGarden } from "../../api/GameApi";
import Timer from "../../utils/Timer";
import { SfxPlayerContext } from "../../pages/GardenPage";
import CoinClip from "../Sound/SoundFiles/CoinClip.wav";
import ShovelClip from "../Sound/SoundFiles/ShovelClip.wav";

const TestButton = props => {
  // Timer Test
  // const sendRequest = () => harvestPlant(1);
  // const [growTimer, setGrowTimer] = React.useState(null);
  // React.useEffect(
  //   ()=> {
  //     console.log("useEffect called")
  //     if (!growTimer)
  //       setGrowTimer(new Timer(10000, ()=>alert("Time's up"))); // 30s timer, alert
  //     else
  //       growTimer.start();
  //   }, [growTimer]
  // );

  // GetSeeds Test
  // const sendRequest = () => getSeeds().then(resp=>resp.json()).then(json=>console.log(json));

  const sfxAudio = React.useContext(SfxPlayerContext);

  return(
    <div>
      Testing sfx
      <Button onClick={()=>{
          console.log(`Testing sfx. Playing coins`);
          if (!sfxAudio.isSfxMuted) {
            console.log(sfxAudio.isSfxMuted);
            sfxAudio.audioHandle.src = CoinClip;
            sfxAudio.audioHandle.load();
            sfxAudio.audioHandle.play();
          }
        }}>Test Coins</Button>
        <Button onClick={()=>{
          console.log(`Testing sfx. Playing dig`);
          if (!sfxAudio.isSfxMuted) {
            sfxAudio.audioHandle.src = ShovelClip;
            sfxAudio.audioHandle.load();
            sfxAudio.audioHandle.play();
          }
        }}>Test Dig</Button>
        <Button onClick={()=>{
          console.log(`Testing SFX mute.`);
          sfxAudio.volume > 0 ? sfxAudio.volumeControl(0) : sfxAudio.volumeControl(100)
        }}>Test Mute</Button>
    </div>
  )
}


export default TestButton;
