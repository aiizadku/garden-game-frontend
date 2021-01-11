import { Button } from "@material-ui/core"
import { harvestPlant } from "../../api/GameApi";

const TestButton = props => {
  const sendRequest = () => harvestPlant(1);
  return(
    <div>
      Testing {props.name ? props.name : null}
      <Button onClick={sendRequest}>Test</Button>
    </div>
  )
}


export default TestButton;
