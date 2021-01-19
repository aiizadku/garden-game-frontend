import { useEffect, useState } from 'react'
import UserAPI from '../../api/UserApi'
import { Button, makeStyles } from "@material-ui/core";
import { Dialog } from '@material-ui/core';
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Grid,} from '@material-ui/core'


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
    borderBottom: "2px solid #b89e7b",
  },
  hover: {
    "&:hover": {
      backgroundColor: "wheat",
    },
  },
  table: {
    minWidth:250,
  },
});



const LeaderBoard = () => {

  const classes = useStyles();
  const [statList, setStatList] = useState([])
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    UserAPI.fetchUserStats().then((json) => {
      json.sort((a, b)=> {
        return b.profile.xp - a.profile.xp
      })
      setStatList(json.slice(0,10))
      console.log(json)
    })
  }, [])

  const makeTable = () => {
    return (
        <TableContainer >
          <Table className={classes.table} aria-label="simple table">
            <TableHead >
              <TableRow className={classes.title}>
                <TableCell>Name</TableCell>
                <TableCell align="right">XP</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {statList.map((user)=>(
                <TableRow key={user.username} className={classes.content}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell align="right">{user.profile.xp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
  }

  return (
    // <div >
    //   <Button variant="contained" color="secondary" onClick={handleClickOpen}>
    // LeaderBoard
    //   </Button>
    // <Dialog open={open} onClose={handleClose}>
    //   <div >
    //     {makeTable()}
    //     </div>
    // </Dialog>
    // </div>
    <Grid container spacing={1} align='center'>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
           LeaderBoard
        </Button>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <Grid item xs={12}>
          {makeTable()}
        </Grid>
      </Dialog>
    </Grid>
  )
}

export default LeaderBoard;