import React, { useState } from 'react';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
typography: {
  fontFamily: '"Segoe UI"',
   fontSize: '28px',
   color: '#58391c', 
 },
 dialog: {
    backgroundColor: "#96bb7c",
 },
 button2: {
   background: 'transparent',
   boxShadow: '0 3px 5px 2px light',
   transform: 'rotate(-15deg)',
   position: 'absolute',
   width: '30vw',
   height: '4vw',
   left: '8.8%',
   top: '43%',
 
   '&:hover': {
     backgroundColor: 'transparent',
     transition: '0.3s',
     width: '31vw',
     height: '5vw',
     boxShadow: '0px 5px 5px 0px lightgrey',
   }
 },
}))




const Rules = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
       <Button className={classes.button2} variant="contained" color="black" onClick={handleClickOpen}>
          <Typography className={classes.typography}>Rules of the Garden</Typography> 
          
      </Button> 
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        
      >
        <DialogTitle id="form-dialog-title" className={classes.dialog}>👨‍🌾 The Rules of the Garden are Simple!  </DialogTitle>

        <DialogContent className={classes.dialog}>
          <DialogContentText>
            🌼 You are given a small garden to grow your flowers. To start planting, click on an empty plot.
            <br />
            🌼  Once you click on the plot you will see that your seed has been planted.
            <br />
            🌼  To make your flower grow simply click on the plot again and click the "Water" button!
            <br />
            🌼  As long as your flowers have water they will grow!
            <br />
            🌼 When your flower has completly grown click on the plot again and click the "Harvest" button!
            <br />
            🌼 Now get out there and go make a beautiful garden!
          </DialogContentText>
          </DialogContent>
      </Dialog>
    </div>
  );
};

export default Rules;