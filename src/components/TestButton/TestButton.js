import React from "react";
import { Button } from "@material-ui/core"
import { harvestPlant, getSeeds, loadGarden } from "../../api/GameApi";
import Timer from "../../utils/Timer";

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


  return(
    <div>
      Testing loadGarden
      <Button onClick={()=>{
          console.log(`Loading garden...`);
          loadGarden().then(resp=>resp.json()).then(json=>console.log(json));
        }}>Test</Button>
    </div>
  )
}


export default TestButton;
