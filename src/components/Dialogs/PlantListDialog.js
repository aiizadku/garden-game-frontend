import React, { useContext, useState, useEffect, useForceUpdate } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  DialogContent,
} from "@material-ui/core";
import { getSeeds } from "../../api/GameApi";
import getPlantDisplay from "../../images/images";
import { UserContext } from "../../contexts/UserContext";

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 300,
  },
  title: {
    backgroundColor: "saddlebrown",
    borderBottom: "4px solid #7B3503",
  },
  content: {
    backgroundColor: "tan",
  },
  hover: {
    "&:hover": {
      backgroundColor: "wheat",
    },
  },
});
const greyStyles = makeStyles({
  root: {
    width: 400,
    height: 300,
  },
  title: {
    backgroundColor: "gray",
    borderBottom: "4px solid #7B3503",
  },
  content: {
    backgroundColor: "gray",
  },
  hover: {
    "&:hover": {
      backgroundColor: "gray",
    },
  },
});

/**
 * Seed buying menu controlled by GardenPlot.
 * Expects: isMenuOpen, handleSelection, handleBack
 * @param {object} props
 */
const PlantList = (props) => {
  const { gameState } = useContext(UserContext);
  const { current_balance } = gameState.profile;
  // user.profile.current_balance for the users balance
  const classes = useStyles();
  const grey = greyStyles();
  //const [styleClass, setStyleClass] = React.useState(classes.content);
  const [allSeeds, setAllSeeds] = React.useState([]);


  // React.useEffect(
  //   ()=>{
  //     (async()=>{
  //       // Call GameApi to get getSeeds
  //       // Store plants in plants
  //       const response = await getSeeds();
  //       console.log(await response);
  //       const jsonResponse = await response.json();
  //       if (await jsonResponse)
  //         setPlants(await jsonResponse["plants"]);
  //       else
  //         console.log("undefined plant response");
  //     })();
  //   }, []
  // );
  React.useEffect(() => {
    getSeeds()
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setAllSeeds(json["plants"]);
      });
  }, []);

  const makeListItem = (plantInfo) => {
    return (
      <div>
        {plantInfo.cost <= current_balance ? (
          <ListItem
            alignItems="flex-start"
            className={classes.hover}
            onClick={() => props.handleSelection(plantInfo.id)}
          >
            <ListItemAvatar>
              <Avatar
                alt={plantInfo.flower_name}
                src={getPlantDisplay(plantInfo.id, "Mature")}
              />
            </ListItemAvatar>
            <ListItemText>
              {`ID: ${plantInfo.id}, flower_name: ${plantInfo.flower_name}, cost: ${plantInfo.cost}, time to mature: ${plantInfo.time_to_mature}, exp value: ${plantInfo.exp_value}`}
            </ListItemText>
          </ListItem>
        ) : (
          <ListItem alignItems="flex-start" className={grey.hover}>
            <ListItemAvatar>
              <Avatar
                alt={plantInfo.flower_name}
                src={getPlantDisplay(plantInfo.id, "Grey")}
              />
            </ListItemAvatar>
            <ListItemText>
              {`ID: ${plantInfo.id}, flower_name: ${plantInfo.flower_name}, cost: ${plantInfo.cost}, time to mature: ${plantInfo.time_to_mature}, exp value: ${plantInfo.exp_value}`}
            </ListItemText>
          </ListItem>
        )}
      </div>
    );
  };

  // const filteredSeeds = allSeeds.map((seed) => seed.cost > current_balance);
  // filteredSeeds &&

  // console.log("all seeds", filteredSeeds);

  return (
    <Dialog open={props.isMenuOpen}>
      <DialogTitle className={classes.title}>Buy a Plant?</DialogTitle>
      <DialogContent className={classes.content}>
        <List className={classes.root}>
          {allSeeds.length 
            ? allSeeds.map(makeListItem) 
            : null}
        </List>
      </DialogContent>
      <DialogActions style={{ backgroundColor: "tan" }}>
        <Button variant="contained" color="default" onClick={props.handleBack}>
          Back
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlantList;
