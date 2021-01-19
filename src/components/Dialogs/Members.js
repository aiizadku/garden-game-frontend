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
import Aiizad from '../../images/aaizad.png';
import Timothy from '../../images/tim.png';
import Jason from '../../images/jason.png';
import Luis from '../../images/lu.png';
import Jerel from '../../images/jerel.png';



const useStyles = makeStyles((theme) => ({
  button3: {
    height: '125px',
    width: '125px',
    'border-radius': '50%',
    position: 'absolute',
    right: '16%',
    backgroundColor: '#ffe227',
    },
  typography: {
    // href: 'font.css',
    fontFamily: '"Segoe UI"',
    fontSize: '40px',
    color: '#58391c', 
  },
  table: {
    'width': '80%',
    'height': '100px',
    'border-collapse': 'collapse',
  },

  tr: {
    'text-align': 'left',
    'width': '10%',
    // 'margin-right': '150px',
    'height': '5%'

  },
  th: {
    'text-align': 'left',
    // 'margin-right': '150px',
    'width': '0%',
    'height': '0%'
  },
  td: {
    'text-align': 'left',
    'width': '10%',
    'height': '5%'
    // 'margin-right': '150px',

  },
  dialog: {
    backgroundColor: "#c6ebc9",
    'font-weight': 'bold'
  }


}))

const Members = () => {
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
      <Button className={classes.button3} onClick={handleClickOpen}> </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        
      >
        <DialogTitle id="form-dialog-title" className={classes.dialog}>ᗰEET TᕼE ᑕᖇEᗩTOᖇᔕ!👨‍🌾 👨‍🌾 👨‍🌾 👨‍🌾 👨‍🌾  </DialogTitle>

        <DialogContent className={classes.dialog}>
          <table className={classes.table}>
            <tr className={classes.tr}>
              <th className={classes.th}><a href="https://www.linkedin.com/in/aiizad-kulchoroeva/"><img width="50%" src={Aiizad}></img></a></th>
              <th className={classes.th}>Aiizad Kulchoroeva: Software Engineer</th>
            </tr>
 
            <tr>
              <th className={classes.th}><a href="https://www.linkedin.com/in/timothy-cummingsii/"><img width="50%" src={Timothy}></img></a></th>
              <th className={classes.th}>Timothy Cummings II: Software Engineer, 10 Years USAF</th>
            </tr>

            <tr>
              <th className={classes.th}><a href="https://www.linkedin.com/in/zjthomas1/"><img width="50%" src={Jerel}></img></a></th>
              <th className={classes.th}>Zachary (Jerel) Thomas: Software Engineer, 6 Years USAF</th>
            </tr>

            <tr>
              <th className={classes.th}><a href="https://www.linkedin.com/in/jmrideout/"><img width="50%" src={Jason}></img></a></th>
              <th className={classes.th}>Jason Rideout: Software Engineer, 5 Years US Navy</th>
            </tr>
            
            <tr>
              <th className={classes.th}><a href="https://www.linkedin.com/in/luishern/"><img width="50%" src={Luis}></img></a></th>
              <th className={classes.th}>Luis Hernandez: Software Engineer, 5 Years US Navy</th>
            </tr>

            </table>
          </DialogContent>
      </Dialog>
    </div>
  
  );
};

export default Members;