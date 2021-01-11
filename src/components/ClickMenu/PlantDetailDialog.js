import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button, Typography } from '@material-ui/core';
import React from 'react';

/**
 * Popup menu when plant is clicked.
 * Expects properties: isMenuOpen, plantId, plotId, growthStatus
 * Expects functions:  handleHarvest, handleWater, handleBack
 * @param {object} props
 */
const PlantDetailDialog = props => {
  // Opens when plant is clicked.
  // Harvest/Water button depends on growthStatus
  return(
    <div>
      <Dialog
        open={props.isMenuOpen}
        aria-labelledby="plant-menu"
      >
        <DialogTitle style={{backgroundColor: "saddlebrown", borderBottom: "4px solid #7B3503"}}>Plant (plant name here)</DialogTitle>
        <DialogContent style={{backgroundColor: "tan"}}>
          <DialogContentText id="plant-menu">
            <Typography gutterBottom>
              Id: {props.plantId}, not needed. just demonstrating
            </Typography>
            <Typography gutterbottom>
              Status: {props.growthStatus}
            </Typography>
            <Typography gutterBottom>
              PlotId: {props.plotId}
            </Typography>
            <Typography gutterBottom>
              Description: Description taken from database.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor: "tan"}}>
          {
            props.growthStatus === "Mature"
            ? <Button variant="contained" onClick={props.handleHarvest} color="secondary">
                Harvest
              </Button>
            : <Button variant="contained" onClick={props.handleWater} color="primary">
                Water
              </Button>
          }
          <Button variant="contained" onClick={props.handleBack} color="default">
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default PlantDetailDialog;
