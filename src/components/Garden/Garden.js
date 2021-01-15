import React from 'react';
import { makeStyles } from '@material-ui/core';
import GardenPlot from './GardenPlot';
import { harvestPlant, loadGarden, getPlantDetail } from "../../api/GameApi";
import { UserContext } from '../../contexts/UserContext'
import { useContext } from "react";

// CSS styles
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

/**
 * Garden component contains GardenPlot components.
 * Major game functionality is controlled here.
 * @param {object} props 
 */
const Garden = (props) => {

  // Variables //////
  const {user} = useContext(UserContext);
  const userRow = user.garden.rows;
  const userColumn = user.garden.columns;
  const [jsonResponse, setJsonResponse] = React.useState({});
  const [gardenGrid, setGardenGrid] = React.useState([]);
  const classes = useStyles();

  /**
   * Deletes plant from database.
   * Adds money and exp to player profile.
   * If the plant is unable to be deleted, the frontend does nothing.
   * @param {number} plantId 
   * @param {string} id (`plot${row}-${column}`)
   */
  const handleHarvest = (plantId, id) => {
    console.log(`Harvesting ${id}.`); // plot#-#, first is row, second is column
    let rowColData = id.slice(4).split('-');
    harvestPlant(plantId, rowColData[0], rowColData[1])
    .then(resp=>{
      if (resp.ok)
        dispatch({
          type: 'delete',
          payload: {
            row: rowColData[0],
            column: rowColData[1]
          }
      });
    });
  }

  /**
   * Creates a new plant on the frontend.
   * Called from GardenPlot, which handles the backend.
   * Will not be called if the backend cannot create a plant.
   * @param {number} plant_id 
   * @param {number} row 
   * @param {number} column 
   */
  const createNewPlant = (plant_id, row, column) => {
    dispatch({
      type: 'new',
      payload: {
        'row': row,
        'column': column,
        'plantId': plant_id
      }
    });
  };

  /**
   * 
   * @param {number} row 
   * @param {number} column 
   * @param {number} elapsedTime (ms)
   */
  const updateElapsedGrowTime = (row, column, elapsedTime) => {
    dispatch({
      type: 'update',
      payload: {
        'row': row,
        'column': column,
        'value': elapsedTime
      }
    });
  }

  const updateGarden = (gardenPlotsData) => {
    console.log("updateGarden called -> setGardenGrid");
    // Creates components based on plant data in gardenPlotsData
    if (!gardenPlotsData || !gardenPlotsData.length) return("Loading");

    let gardenPlots = [];
    for (let r = 0; r < gardenPlotsData.length; r++) {
      let gardenRow = [];
      for (let c = 0; c < gardenPlotsData[r].length; c++) {
        gardenRow.push(
          <div classname={classes.flexPlot}>
            <GardenPlot
              handleHarvest={handleHarvest}
              createNewPlant={createNewPlant}
              updateElapsedGrowTime={updateElapsedGrowTime}
              {...gardenPlotsData[r][c]}
              />
          </div>
        );
      }
      gardenPlots.push(
        <div className={classes.flexRow}>
          {gardenRow}
        </div>
      );
    }
    setGardenGrid(
      <div className={classes.flexContainer}>
        {gardenPlots}
      </div>
    );
  }

  /**
   * Reducer - modifies gardenPlotsData
   * Payload needs at least row, column
   * action types:
   * -initialize
   * -update (payload also needs key and value)
   * -delete
   * -new    (payload also needs plantId, isWatered)
   * @param {2D array} gardenPlotsData 
   * @param {object}   action 
   */
  const reducer = (gardenPlotsData, action) => {
    const {row, column} = action.payload;
    switch(action.type) {
      case "initialize":
        // Create empty 2d array of row x column size
        let gardenArray = [];
        for (let r=0; r<row; r++) {
          let gardenRow = [];
          for(let c=0; c<column; c++) {
            gardenRow.push(
              {
                isPlant: false,
                plantId: null,
                id: `plot${r}-${c}`,
                remainingTime: null,
                timeToMature: null,
                isWatered: false,
                isHarvested: false
              }
            );
          }
          gardenArray.push(gardenRow);
        }

        if (!Object.keys(jsonResponse).length) {
          console.log("Empty json object")
          return [];
        }

        // Fill in loaded plants
        console.log("Checking for loaded plants.")
        console.log(`Found ${jsonResponse["plants"].length} loaded plants`)
        for (let plant of jsonResponse["plants"]) {
          console.log(plant)
          gardenArray[plant.row_num][plant.column_num] = {
            isPlant: true,
            plantId: plant.plant_id,
            id: `plot${plant.row_num}-${plant.column_num}`,
            remainingTime: plant.remaining_time,
            timeToMature: plant.time_to_mature,
            isWatered: plant.watered,
            isHarvested: plant.harvested
          }
        }

        gardenPlotsData = gardenArray;
        break;

      case "update":
        const {value} = action.payload;
        gardenPlotsData[row][column]["remainingTime"] -= value;
        updateGarden(gardenPlotsData);
        break;

      case "delete":
        gardenPlotsData[row][column] = {
          isPlant: false,
          plantId: null,
          id: `plot${row}-${column}`,
          remainingTime: null,
          timeToMature: null,
          isWatered: false,
          isHarvested: false
        };
        updateGarden(gardenPlotsData);
        break;

      case "new":
        const {plantId, isWatered} = action.payload;
        console.log(`Planting plant with plantID: ${plantId} in plot${row}-${column}`)
        console.warn("WARNING: watered status set to true on planting. Change for weather effects when implemented")
        // Fetch plant details from backend.
        getPlantDetail(plantId)
        .then(resp=>resp.json(),
              reason=>console.error(reason))
        .then(json=>{
          // Create new plant object and store in correct row, column.
          gardenPlotsData[Number(row)][Number(column)] = {
            isPlant: true,
            plantId: plantId,
            id: `plot${row}-${column}`,
            remainingTime: json.time_to_mature,
            timeToMature: json.time_to_mature,
            isWatered: true,
            isHarvested: false
          }
          updateGarden(gardenPlotsData);
        }, reason=>console.error(reason));
        break;
      default:
        console.error("Invalid action type in Garden.reducer.");
    }
    // console.log(gardenPlotsData);
    return gardenPlotsData;
  }
  // useReducer(reducer, initialState)
  const [gardenPlotsData, dispatch] = React.useReducer(reducer, [])


  // Load garden data on component mount
  React.useEffect(
    ()=>{
      loadGarden()
      .then(resp=>resp.json())
      .then(json=>setJsonResponse(json));
    }, []
  );
  // Called when jsonResponse updates, or garden size changes.
  React.useEffect(
    ()=>{
      // Prevent operations if garden hasn't been loaded yet
      if (!userRow || !userColumn) return;
      // Initialize empty garden
      dispatch({
        type: "initialize",
        payload: {
          'row': userRow,
          'column': userColumn
        }
      })
    }, [jsonResponse, userRow, userColumn]
  );
  //Update gardenGrid when gardenPlotsData is updated
  React.useEffect(
    ()=>updateGarden(gardenPlotsData), [gardenPlotsData, classes]
  );
  
  return (
    <div className={classes.centered}>
      {gardenGrid}
    </div>
  );
}

export default Garden;

