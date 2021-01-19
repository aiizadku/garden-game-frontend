import React from 'react';
import { Box, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "75px 75px",
    gridTemplateRows: "30px 25px 25px 25px",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 150,
    height: 200,
    borderRadius: "4px",
    border: "4px solid #7B3503",
    backgroundColor: 'tan',
    borderTopRightRadius: 14,
  },
  leftColumn: {
    marginLeft: "15px"
  },
  rightColumn: {
    marginRight: "15px"
  }
})

const PlayerInfoBox = props => {
  const classes = useStyles();
  return(
    <Box className={classes.root}>
      <Box style={{
        gridColumn: "1 / 3",
        gridRow:    "1 / 2",
        backgroundColor: "saddlebrown",
        borderBottom: "4px solid #7B3503",
        fontSize: 20,
        borderTopRightRadius: 8,
      }}>
        NAME
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
      >100</Box>

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
      >25000</Box>

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
      >25000</Box>
    </Box>
  );
};


export default PlayerInfoBox;
