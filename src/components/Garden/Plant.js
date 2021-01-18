import React from 'react';
import getPlantDisplay from '../../images/images';
import gsap from 'gsap';
import PlantDetailDialog from '../Dialogs/PlantDetailDialog';
import { makeStyles } from '@material-ui/core';
import Timer from "../../utils/Timer";

const useStyles = makeStyles({
  plantContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundSize: "100% 60%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 90%"
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
 * Displays plant detail dialog if clicked.
 * Expects: handleHarvest, id, plantId, growthPercent, updateElapsedGrowTime
 * @param {object} props 
 */
const Plant = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [timerHandle, setTimerHandle] = React.useState(null);
  const [waterTimerHandle, setWaterTimerHandle] = React.useState(null);
  const [isWatered, setIsWatered] = React.useState(false);
  const classes = useStyles();
  const WATER_TIME_DURATION = 10; // in seconds

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

  // Click events //////
  const handleClickEvent = (e) => {
    e.stopPropagation();
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    }
  }
  const handleWater = () => {
    console.log(`Water plant ${props.id}`);
    setIsWatered(true);
    waterTimerHandle.reset();
    waterTimerHandle.start();
  };
  const handleHarvest = () => {
    console.log(`Harvest plant ${props.id}`);

    // Clear and invalidate timers
    waterTimerHandle.stop();
    timerHandle.stop();

    // Update backend and frontend
    props.handleHarvest(props.plantId, props.id);
    setIsMenuOpen(false);
  };
  const handleBack = () => {
    console.log("Back clicked");
    setIsMenuOpen(false);
  }

  // useEffects //////
  React.useEffect( // When component first loads, create a timer and water timer
    ()=> {
      console.log("useEffect: Creating grow timer and water timer.")
      const rowColData = props.id.slice(4).split('-');
      const interval = 100; // 0.1s update interval
      const updateTime = () => props.updateElapsedGrowTime(rowColData[0], rowColData[1], interval/1000);
      setTimerHandle(
        new Timer(
          props.timeToMature*1000,
          ()=>{},
          updateTime,
          props.remainingTime*1000,
          interval
        )
      );

      // WaterTimer sets isWatered to false when ended
      const waterTimeRemaining = isWatered ? WATER_TIME_DURATION*1000 : 0;
      setWaterTimerHandle(
        new Timer(
          WATER_TIME_DURATION*1000,
          ()=>{ // onComplete
            setIsWatered(false);
          },
          ()=>{}, // onUpdate
          waterTimeRemaining,
          interval // 0.1s update interval
        )
      );
      console.log("Water timer created.")
    }, []
  )
  // When timerHandle is set, possibly start (depends on isWatered)
  React.useEffect(
    ()=> {
      console.log("Checking water to see if timer should start.")
      if (timerHandle && isWatered) {
        timerHandle.start();
      }
      if (timerHandle && !isWatered) {
        timerHandle.stop();
      }
    }, [timerHandle, isWatered]
  );
  // Animate when id is set
  React.useEffect(animate, [props.id]);


  return (
    <>
      <div
        onClick={e=>handleClickEvent(e)}
        className={classes.plantContainer}
        style={
          isWatered ? 
          {
            backgroundImage: "radial-gradient(rgba(91, 46, 14, .9) 5%, rgba(91, 46, 14, .8) 30%, rgba(139, 69, 19, 0) 70%)"
          }
          : null
        }
      >
        {
          props.id
          ? <img
              id={props.id}
              src={getPlantDisplay(props.plantId, (timerHandle ? getGrowthStatus(timerHandle.status()*100) : getGrowthStatus(0)))}
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
            growthStatus={getGrowthStatus(timerHandle.status()*100)}
            remainingTime={props.remainingTime}
            isWatered={props.isWatered}
            waterPercent={(1-waterTimerHandle.status())*100}
          />
        : null
      }
    </>
  );
}


export default Plant;
