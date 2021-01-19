import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import gsap from 'gsap';


const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "75px 75px",
    gridTemplateRows: "40px 25px 25px 25px",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 150,
    height: 120,
    borderRadius: "4px",
    border: "4px solid #7B3503",
    backgroundColor: 'tan',
    borderTopRightRadius: 8,
    overflow: "hidden"
  },
  leftColumn: {
    marginLeft: "15px"
  },
  rightColumn: {
    marginRight: "15px"
  }
})

const PlayerInfoBox = props => {
  // Start Open
  const [isOpen, setIsOpen] = React.useState(true);
  const [yOffset, setYOffset] = React.useState(0);
  const classes = useStyles();

  const toggleOpen = () => {
    if (isOpen) {
      // Close box
      console.log("closing info box")
      setIsOpen(false);
      setYOffset(90);
    }
    else {
      // Open box
      console.log("opening info box")
      setIsOpen(true);
      setYOffset(0);
    }
  };

  React.useEffect(
    ()=>{
      // Play animation
      gsap.to("#PlayerInfoBox", {
        duration: 0.5,
        y: yOffset
      });
    }, [isOpen, yOffset]
  );

  return(
    <Box className={classes.root} onClick={toggleOpen} id="PlayerInfoBox">
      <Box style={{
        gridColumn: "1 / 3",
        gridRow:    "1 / 2",
        backgroundColor: "saddlebrown",
        borderBottom: "4px solid #7B3503",
        fontSize: 20,
        borderTopRightRadius: 2,
        marginBottom: 6
      }}>
        {props.username}
      </Box>

      {/* Level Row */}
      <Box style={{
          gridRow: "2 / 3",
          gridColumn: "1 / 2"
        }}
        className={classes.leftColumn}
      >Level:</Box>
      <Box style={{
          gridRow: "2 / 3",
          gridColumn: "2 / 3"
        }}
        className={classes.rightColumn}
      >{props.currentLevel}</Box>

      {/* XP Row */}
      <Box style={{
          gridRow: "3 / 4",
          gridColumn: "1 / 2"
        }}
        className={classes.leftColumn}
      >Exp:</Box>
      <Box style={{
          gridRow: "3 / 4",
          gridColumn: "2 / 3"
        }}
        className={classes.rightColumn}
      >{props.currentXp}</Box>

      {/* Money Row */}
      <Box style={{
          gridRow: "4 / 5",
          gridColumn: "1 / 2"
        }}
        className={classes.leftColumn}
      >Balance:</Box>
      <Box style={{
          gridRow: "4 / 5",
          gridColumn: "2 / 3"
        }}
        className={classes.rightColumn}
      >{props.currentBalance}</Box>
    </Box>
  );
};


export default PlayerInfoBox;
