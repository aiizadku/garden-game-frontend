import React from 'react';
import getPlantDisplay from '../../images/images';
import gsap from 'gsap';
import PlantDetailDialog from '../Dialogs/PlantDetailDialog';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  plantContainer: {
    position: "relative",
    //border: "solid 1px white",
    width: "100%",
    height: "100%"
  },
  plant: {
    position:"absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
})

/**
 * Displays the plant, if planted.
 * Opens seed menu if no plant, and the plot has been clicked.
 * Expects: handleHarvest, id, plantId, growthPercent
 * @param {object} props 
 */
const Plant = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const getGrowthStatus = (percentGrown) => {
    if (percentGrown >= 100) return "Mature";
    else if (percentGrown >= 50) return "Growing";
    else if (percentGrown >= 20) return "Seedling";
    else return "Just Planted";
  };

  const animate = () => {
    var tl = gsap.timeline({repeat: -1, yoyo: true})
    tl.set(`#${props.id}`, {transformOrigin: "50% 100%"});
    tl.from(`#${props.id}`, {duration: 1, scaleX:1.1, scaleY: .9});
  };

  const handleClickEvent = (e) => {
    e.stopPropagation();
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      console.log(`Plant ${props.id} clicked`);
    }
    //e.stopPropagation(); // Prevent further click events behind plant.
  }

  const handleWater = () => {
    console.log(`Water plant ${props.id}`);
    setIsMenuOpen(false);
  };
  const handleHarvest = () => {
    console.log(`Harvest plant ${props.id}`);
    props.handleHarvest(props.plantId, props.id);
    setIsMenuOpen(false);
  };
  const handleBack = () => {
    console.log("Back clicked");
    setIsMenuOpen(false);
  }

  React.useEffect(animate, [props.id]);

  const classes = useStyles();

  return (
    <>
      <div onClick={e=>handleClickEvent(e)} className={classes.plantContainer}>
        {
          props.id
          ? <img
              id={props.id}
              src={getPlantDisplay(props.plantId, getGrowthStatus(props.growthPercent))}
              alt="Plant"
              className={classes.plant}
            />
          : "Plants must have unique IDs in props."
        }
      </div>
      {
        isMenuOpen
        ? 
          <PlantDetailDialog
            plotId={props.id}
            plantId={props.plantId}
            isMenuOpen={isMenuOpen}
            handleHarvest={handleHarvest}
            handleWater={handleWater}
            handleBack={handleBack}
            growthStatus={getGrowthStatus(props.growthPercent)}
          />
        : null
      }
    </>
  );
}


export default Plant;
