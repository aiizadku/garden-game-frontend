import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Plant from './Plant';
import PlantListDialog from '../Dialogs/PlantListDialog';
import { plantSeed } from '../../api/GameApi';


const useStyles = makeStyles({
  plot: {
    position: "relative",
    minHeight: 100,
    minWidth: 100,
    border: "solid #7B3503 1px",
  },
  plotContent: {
    alignContent: "center",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    //transform: "translate(-50%, -50%)",
  }
});

/**
 * Expects: handleHarvest, createNewPlant, isPlant, plantId, id, remainingTime, timeToMature, isWatered, isHarvested, updateElapsedGrowTime
 * @param {object} props 
 */
const GardenPlot = (props) => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Closes seed buying menu when seed is purchased.
  // Notifies backend via GameApi.plantSeed.
  // Updates frontend via Garden's createNewPlant
  const handleSelection = (plantId) => {
    setIsMenuOpen(false);
    // id={`plot${r}-${c}`}
    const rowColData = props.id.slice(4).split('-'); // r-c
    let data = {
      "row": rowColData[0],
      "column": rowColData[1],
      "plantId": plantId
    }
    plantSeed(data)
    .then(resp=>{
      if (resp.ok)
        props.createNewPlant(plantId, data.row, data.column); // Update frontend data.
    }); // Backend API call. Updates database.
  }

  // Closes the seed buying menu when back button is pressed.
  // Passed to PlantListDialog.
  const handleBack = () => setIsMenuOpen(false);

  return(
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
