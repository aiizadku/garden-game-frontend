import React from 'react';
import { makeStyles } from '@material-ui/core';
import GardenPlot from './GardenPlot';
import { harvestPlant } from "../../api/GameApi";

// [row][col]
const exampleData = {
  "plants": [
    [
      {id:0, growthPercent: 0},
      {id:1, growthPercent: 0},
      {id:2, growthPercent: 0},
      {id:3, growthPercent: 0},
      {id:4, growthPercent: 0}
    ],
    [
      {id:0, growthPercent: 20},
      {id:1, growthPercent: 20},
      {id:2, growthPercent: 20},
      {id:3, growthPercent: 20},
      {id:4, growthPercent: 20}
    ],
    [
      {id:0, growthPercent: 50},
      {id:1, growthPercent: 50},
      {id:2, growthPercent: 50},
      {id:3, growthPercent: 50},
      {id:4, growthPercent: 50}
    ],
    [
      {id:0, growthPercent: 100},
      {id:1, growthPercent: 100},
      {id:2, growthPercent: 100},
      {id:3, growthPercent: 100},
      {id:4, growthPercent: 100}
    ]
  ]
};



const useStyles = makeStyles({
  flexContainer: {
    display: "inline-flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    backgroundImage: "repeating-linear-gradient(to bottom, saddlebrown 0px 20px, sienna 20px 40px)",
    border: "4px solid #7B3503"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignContent: "center",
  },
  flexPlot: {
    width: 100,
    height: 100,
    position: 'relative',
    border: "2px solid white"
  },
  centered: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});

const handleHarvest = (plantId, id) => {
  harvestPlant(plantId); // Gives exp and $
  // Remove plant with id from garden
  console.log(id); // plot#-#, first is row, second is column
  console.log("REMOVE ME - garden.js - handleHarvest.");
}

const Garden = (props) => {
  const makeGardenGrid = (rows, cols) => {
    let gardenPlots = [];
    for (let r = 0; r < rows; r++) {
      let gardenRow = [];
      for (let c = 0; c < cols; c++) {
        gardenRow.push(
          <div classname={classes.flexPlot}>
            <GardenPlot
              plantId={exampleData["plants"][r][c]["id"]}
              id={`plot${r}-${c}`}
              isPlant={true}
              growthPercent={exampleData["plants"][r][c]["growthPercent"]}
              handleHarvest={handleHarvest}
              />
          </div>
        );
      }
      // Add empty row just for demo purposes
      gardenRow.push(
        <div classname={classes.flexPlot}>
            <GardenPlot
              plantId={null}
              id={`plot${r}-${cols}`}
              isPlant={false}
              growthPercent={null}
              handleHarvest={handleHarvest}
              />
          </div>
      )
      gardenPlots.push(
        <div className={classes.flexRow}>
          {gardenRow}
        </div>
      );
    }
    return (
      <div className={classes.flexContainer}>
        {gardenPlots}
      </div>
    );
  }

  // const [allSeeds, setAllSeeds] = React.useState([]);
  
  // React.useEffect(
  //   ()=>{
  //     getSeeds()
  //     .then(resp=>resp.json())
  //     .then(json=>setAllSeeds(json["plants"]));
  //   }, []
  // );
  
  const classes = useStyles();
  
  return (
    <div className={classes.centered}>
      {makeGardenGrid(4, 5)}
    </div>
  );
}

export default Garden;

