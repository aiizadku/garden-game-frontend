import { Button } from "@material-ui/core"
import { harvestPlant, getSeeds } from "../../api/GameApi";

const TestButton = props => {
  // const sendRequest = () => harvestPlant(1);
  const sendRequest = () => getSeeds().then(resp=>resp.json()).then(json=>console.log(json));
  return(
    <div>
      Testing getSeeds
      <Button onClick={sendRequest}>Test</Button>
    </div>
  )
}


export default TestButton;
