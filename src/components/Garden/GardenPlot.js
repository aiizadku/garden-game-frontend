import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Plant from './Plant';


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

const GardenPlot = (props) => {
  const classes = useStyles();
  return(
    <Box className={classes.plot}>
      <Box className={classes.plotContent}>
        {
          props.isPlant
          ? <Plant
              id={props.id}
              plantId={props.plantId}
              growthPercent={props.growthPercent}
            />
          : null
        }
      </Box>
    </Box>
  );
};


export default GardenPlot;
