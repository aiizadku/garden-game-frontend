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
 * Expects: handleHarvest, plantId, growthPercent
 * @param {object} props 
 */
const GardenPlot = (props) => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSelection = (plantId) => {
    setIsMenuOpen(false);
    // id={`plot${r}-${c}`}
    const rowColData = props.id.slice(4).split('-'); // r-c
    let data = {
      "row": rowColData[0],
      "column": rowColData[1],
      "plantId": plantId
    }
    console.log(data);
    plantSeed(data);
  }
  const handleBack = () => setIsMenuOpen(false);

  return(
    <Box className={classes.plot}>
      <Box className={classes.plotContent} onClick={()=>setIsMenuOpen(true)}>
        {
          props.isPlant
          ? <Plant
              id={props.id}
              plantId={props.plantId}
              growthPercent={props.growthPercent}
              handleHarvest={props.handleHarvest}
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
