import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    '& > * + *': {
      marginTop: theme.spacing(2),
     
    },
  },
}));

const DefaultAlert = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity={props.type}>
        
        <strong>{props.message}</strong>
      </Alert>
    </div>
  );
};

export default DefaultAlert;