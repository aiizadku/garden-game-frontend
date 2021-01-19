import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Plant from "./Plant";
import PlantListDialog from "../Dialogs/PlantListDialog";
import { plantSeed } from "../../api/GameApi";
import { SfxPlayerContext } from '../../pages/GardenPage';
import ShovelClip from "../Sound/SoundFiles/ShovelClip.wav";

const useStyles = makeStyles({
  plot: {
    position: "relative",
    minHeight: 100,
    minWidth: 100,
  },
  plotContent: {
    alignContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

/**
 * GardenPlot contains planted plant or buying menu.
 * @param {object} props 
 */
const GardenPlot = (props) => {
  // Variables //////
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const sfxPlayer = React.useContext(SfxPlayerContext);

  // Button event click handlers //////
  // Called when a plant is clicked in the buying menu.
  const handleSelection = (plantInfo) => {
    setIsMenuOpen(false);
    // Construct data to send to backend
    const [row, column] = props.id.slice(4).split("-");
    let data = {
      "row": row,
      "column": column,
      "plantId": plantInfo.id
    };
    // Attempt to plant seed in database
    plantSeed(data)
    .then(resp=>{
      if (resp.ok) {
        // Create new plant on frontend
        props.createNewPlant(plantInfo, data.row, data.column);
        // Pay for plant
        props.subtractMoney(plantInfo.cost);
        // Play planting sound
        console.log("sfxPlayer: ")
        console.log(sfxPlayer);
        if (!sfxPlayer.isSfxMuted) {
          sfxPlayer.audioHandle.src = ShovelClip;
          sfxPlayer.audioHandle.load();
          sfxPlayer.audioHandle.play();
        }
      }
    });
  };
  
  //Closes plant buying menu.
  const handleBack = () => setIsMenuOpen(false);

  return (
    <Box className={classes.plot}>
      <Box className={classes.plotContent} onClick={()=>setIsMenuOpen(true)}>
        {
          props.isPlant
          ? <Plant
              id={props.id}
              plantId={props.plantId}
              growthPercent={((props.timeToMature - props.remainingTime) / props.timeToMature)*100}
              timeToMature={props.timeToMature}
              remainingTime={props.remainingTime}
              handleHarvest={props.handleHarvest}
              isWatered={props.isWatered}
              updateElapsedGrowTime={props.updateElapsedGrowTime}
            />
          : null
        }
      </Box>
      {
        isMenuOpen
        ?
          <PlantListDialog
            isMenuOpen={isMenuOpen}
            handleSelection={handleSelection}
            handleBack={handleBack}
          />
        : null
      }
    </Box>
  );
};

export default GardenPlot;
