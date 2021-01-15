import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button, Typography } from '@material-ui/core';
import React from 'react';
import { getPlantDetail } from "../../api/GameApi";

/**
 * Popup menu when plant is clicked.
 * Expects properties: isMenuOpen, plotId, growthStatus, plantId
 * Expects functions:  handleHarvest, handleWater, handleBack
 * @param {object} props
 */
const PlantDetailDialog = props => {
  // Opens when plant is clicked.
  // Harvest/Water button depends on growthStatus
  const [plantInfo, setPlantInfo] = React.useState({});
  React.useEffect(
    ()=>{
      getPlantDetail(props.plantId)
      .then(resp=>resp.json())
      .then(json=>setPlantInfo(json));
    }, [props]
  );

  return(
    <div>
      <Dialog
        onClick={(e)=>e.stopPropagation()}
        open={props.isMenuOpen}
        aria-labelledby="plant-menu"
      >
        <DialogTitle style={{backgroundColor: "saddlebrown", borderBottom: "4px solid #7B3503"}}>Plant: {[plantInfo.flower_name]}</DialogTitle>
        <DialogContent style={{backgroundColor: "tan"}}>
          <DialogContentText id="plant-menu">
            <Typography gutterBottom>
              Cost: {plantInfo.cost}
            </Typography>
            <Typography gutterbottom>
              Region: {plantInfo.region}
            </Typography>
            <Typography gutterBottom>
              Rewards: {plantInfo.exp_value} exp, ${plantInfo.currency}
            </Typography>
            <Typography gutterBottom>
              Description: {plantInfo.description}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor: "tan"}}>
          {
            props.growthStatus === "Mature"
            ? <Button variant="contained" onClick={(e)=>{e.stopPropagation(); props.handleHarvest()}} color="secondary">
                Harvest
              </Button>
            : <Button variant="contained" onClick={(e)=>{e.stopPropagation()}} color="primary">
                Water
              </Button>
          }
          <Button variant="contained" onClick={(e)=>{e.stopPropagation();props.handleBack()}} color="default">
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default PlantDetailDialog;
