import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button, Typography } from '@material-ui/core';
import React from 'react';
import { getPlantDetail } from "../../api/GameApi";
import LiquidFillGauge from 'react-liquid-gauge';
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';

/**
 * Popup menu when plant is clicked.
 * Expects properties: isMenuOpen, plotId, growthStatus, plantId, remainingTime
 * Expects functions:  handleHarvest, handleWater, handleBack
 * @param {object} props
 */
const PlantDetailDialog = props => {
  // Opens when plant is clicked.
  // Harvest/Water button depends on growthStatus
  const [plantInfo, setPlantInfo] = React.useState({});
  const [remainingTime, setRemainingTime] = React.useState(100);

  React.useEffect(
    ()=>{
      setRemainingTime(props.remainingTime);
      getPlantDetail(props.plantId)
      .then(resp=>resp.json())
      .then(json=>setPlantInfo(json));
    }, []
  );

  React.useEffect(
    ()=>{
      console.log("useEffect update");
      setRemainingTime(props.remainingTime);
    }
  );

  // Liquid gauge variables
  const radius = 50;
  //const interpolate = interpolateRgb('#6495ed', '#dc143c');
  const interpolate = interpolateRgb('#606dbc', '#465298');
  const fillColor = interpolate(50/100);
  const gradientStops = [
      {
          key: '0%',
          stopColor: color(fillColor).darker(0.5).toString(),
          stopOpacity: 1,
          offset: '0%'
      },
      {
          key: '50%',
          stopColor: fillColor,
          stopOpacity: 0.75,
          offset: '50%'
      },
      {
          key: '100%',
          stopColor: color(fillColor).brighter(0.5).toString(),
          stopOpacity: 0.5,
          offset: '100%'
      }
  ];

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
            <Typography gutterBottom>
              Time Remaining: {Number(props.remainingTime)>0 ? Number(props.remainingTime).toFixed(0) : 0} seconds
            </Typography>
            <Typography gutterBottom>
              Water Status: {props.isWatered ? "Watered" : "Dry"}
            </Typography>
            <Typography gutterBottom>
            <LiquidFillGauge
                    style={{ margin: '0 auto' }}
                    width={radius * 2}
                    height={radius * 2}
                    value={props.waterPercent.toFixed(0)}
                    percent="%"
                    textSize={1}
                    textOffsetX={0}
                    textOffsetY={0}
                    textRenderer={(props) => {
                        const value = Math.round(props.value);
                        const radius = Math.min(props.height / 2, props.width / 2);
                        const textPixels = (props.textSize * radius / 2);
                        const valueStyle = {
                            fontSize: textPixels
                        };
                        const percentStyle = {
                            fontSize: textPixels * 0.6
                        };
 
                        return (
                            <tspan>
                                <tspan className="value" style={valueStyle}>{value}</tspan>
                                <tspan style={percentStyle}>{props.percent}</tspan>
                            </tspan>
                        );
                    }}
                    riseAnimation
                    waveAnimation
                    waveFrequency={2}
                    waveAmplitude={3}
                    gradient
                    //gradientStops={gradientStops}
                    circleStyle={{
                        fill: fillColor
                    }}
                    waveStyle={{
                        fill: fillColor
                    }}
                    textStyle={{
                        fill: color('#444').toString(),
                        fontFamily: 'Arial'
                    }}
                    waveTextStyle={{
                        fill: color('#fff').toString(),
                        fontFamily: 'Arial'
                    }}
                    // onClick={() => {
                    //     this.setState({ value: Math.random() * 100 });
                    // }}
                />
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor: "tan"}}>
          {
            props.growthStatus === "Mature"
            ? <Button variant="contained" onClick={(e)=>{e.stopPropagation(); props.handleHarvest()}} color="secondary">
                Harvest
              </Button>
            : <Button variant="contained" onClick={(e)=>{e.stopPropagation(); props.handleWater()}} color="primary">
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
