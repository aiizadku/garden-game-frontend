import React, { useContext } from "react";
import { Button } from "@material-ui/core"
import { harvestPlant, getSeeds, loadGarden, saveGarden } from "../../api/GameApi";
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

  // Save garden test
 /*
  plant_statuses should include {watered, remaining_time, plant_id, column_number, row_number, plant_id}
  */
  const data = {"plant_statuses": [{
    "watered": true,
    "remaining_time": 1,
    "plant_id": 2,
    "column_number": 0,
    "row_number": 0
  }]};
  const sendRequest = () => saveGarden(data).then(resp=>resp.json()).then(json=>console.log(json));

  return(
    <div>
      Testing sfx
      <Button onClick={()=>{
          console.log(`Testing save garden`);
          sendRequest();
        }}>Test Save</Button>
    </div>
  )
}


export default TestButton;
