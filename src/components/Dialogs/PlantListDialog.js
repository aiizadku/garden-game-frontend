import React, { useContext, useState, useEffect, useForceUpdate } from "react";
import { Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Button, Avatar, makeStyles, DialogContent } from "@material-ui/core";
import { getSeeds } from "../../api/GameApi";
import getPlantDisplay from "../../images/images";
import { UserContext } from "../../contexts/UserContext";
import UserApi from "../../api/UserApi";

/*
Flow:
-Menu opens
-Available plants are pulled from database, filtered by level.
-Unaffordable plants are greyed out and do nothing on click.
-Affordable plants are clickable.
When clicked:
-handleSelection is called
*/

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
  const classes = useStyles();
  const grey = greyStyles();
  const [allSeeds, setAllSeeds] = React.useState([]);
  const { gameState } = useContext(UserContext);
  const [currentBalance, setCurrentBalance] = React.useState(0);
  const [currentLevel, setCurrentLevel] = React.useState(0);

  // Gets list of seeds from backend after initial render
  React.useEffect(
    () => {
      getSeeds()
      .then((resp) => resp.json())
      .then((json) => {
        console.log("Fetched filtered plants in dialog:")
        console.log(json);
        setAllSeeds(json["plants"]);
      });
      UserApi.fetchUserBalanceByID(gameState.user.id)
      .then(data=>setCurrentBalance(data.current_balance));

      
    }, [gameState.user.id]
  );

  React.useEffect(()=>{
    UserApi.currentUser(localStorage.getItem("token")).then((resp)=>{
      resp.json().then((data)=>{
        setCurrentLevel(data.profile.current_level)
      })
    })
  }, [currentBalance])

  const makeListItem = (plantInfo) => {
    return (
      <div>
        {plantInfo.cost <= currentBalance ? (
          <ListItem
            alignItems="flex-start"
            className={classes.hover}
            onClick={() => props.handleSelection(plantInfo)}
          >
            <ListItemAvatar>
              <Avatar
                alt={plantInfo.flower_name}
                src={getPlantDisplay(plantInfo.id, "Mature")}
              />
            </ListItemAvatar>
            <ListItemText>
              {`${plantInfo.flower_name} | Cost: ${plantInfo.cost}, Time to Mature: ${plantInfo.time_to_mature}, Exp Value: ${plantInfo.exp_value}`}
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
              {`${plantInfo.flower_name} | Cost: ${plantInfo.cost}, Time to Mature: ${plantInfo.time_to_mature}, Exp Value: ${plantInfo.exp_value}`}
            </ListItemText>
          </ListItem>
        )}
      </div>
    );
  };

  return (
    <Dialog open={props.isMenuOpen}>
      <DialogTitle className={classes.title}>Buy a Plant?</DialogTitle>
      <DialogContent className={classes.content}>
        <List className={classes.root}>
          {
            currentLevel === 0
            ?
            allSeeds.map(makeListItem).slice(0,1)
            :
            allSeeds.map(makeListItem).slice(1) 
          }
            
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
