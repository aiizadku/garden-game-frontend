import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import blueFlower from '../images/BlueFlowerGrowing.png';
import Button from '@material-ui/core/Button';
import team from '../images/team.png';
import title2 from '../images/title2.png';
import { Typography } from '@material-ui/core';
//import "./font.css";
import { FloatingButton, Item } from "react-floating-button";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Sun from '../images/weather.jpg';
import Rules from '../components/Dialogs/Rules.js';
import Members from '../components/Dialogs/Members.js';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://img.freepik.com/free-vector/wooden-sign-garden_1308-43504.jpg?size=626&ext=jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height:'100vh'

  },
  container: {
    width: '30%',
    margin: 'auto',
    padding: '10px',
    marginTop: '0px',
    borderRadius: '5px',
    boxShadow: '5px 10px 10px #888888'
  },
  title: {
    width: '30%',
    height: '30%',
    align: "left",
  },
  button: {
    background: 'transparent',
    borde
: 'none',    boxShadow: '0 3px 5px 2px light',
    transform: 'rotate(-15deg)',
    position: 'absolute',
    width: '30vw',
    height: '4vw',
    left: '7%',
    top: '30%',
  
    '&:hover': {
      backgroundColor: 'transparent',
      transition: '0.3s',
      width: '31vw',
      height: '5vw',
      boxShadow: '0px 5px 5px 0px lightgrey',
    }
  },
  button3: {
    height: '100px',
    width: '100px',
    'border-radius': '50%',
    position: 'absolute',
    right: '20%',
    backgroundColor: '#ffe227',
    },
  typography: {
    // href: 'font.css',
    fontFamily: '"Segoe UI"',
    fontSize: '40px',
    color: '#58391c', 
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
  floating_button: {
    // 'color': 'primary',
    position: 'absolute',
    right: '.01%',
    size: '10000%',
    fabColor: 'yellow'
  },
  a: {
    position: 'absolute',
    right: '.01%',
    bottom: '.01%'
  }

}))


const HomePage = (props) => {
  const classes = useStyles();
  
  const handleClick = () => {
    return props.history.push('/login')
  }
    return (
      
      <div>
       <div className={classes.root}>
         <div classes={classes.container}>
         
         {/* <Fab className={classes.floating_button}  aria-label="add" color='secondary' size="x-large">
         
         </Fab> */}
         
         <Button onClick={handleClick }className={classes.button} variant="contained" color="black" font-family='TooneyNoodleNF' >
         <Typography className={classes.typography}>start game</Typography>       
         </Button>
        
         {/* <Button className={classes.button2} variant="contained" color="black" href="#contained-buttons">
          <Typography className={classes.typography}>Rules of the Garden</Typography>
          
         </Button> */}
         <Rules/>
         {/* <Button className={classes.button3}> </Button> */}
         <Members/>
         
         <img className ={classes.title} object-position='left top' src={title2}></img>
        
         </div>
         
         <a className={classes.a} href="https://www.freepik.com/vectors/tree">Tree vector created by brgfx - www.freepik.com
         </a>
         </div>
      </div>
    );
}


export default HomePage;
