import { useEffect, useState } from "react";
import UserAPI from "../../api/UserApi";
import { Dialog } from "@material-ui/core";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Button,
  makeStyles,
  IconButton,
  Box
} from "@material-ui/core";
import podium from '../../images/podium_small.png'


const useStyles = makeStyles({
  title: {
    backgroundColor: "saddlebrown",
    borderBottom: "4px solid #7B3503",
  },
  content: {
    backgroundColor: "tan",
    borderBottom: "2px solid #b89e7b",
  },
  table: {
    minWidth: 250,
  },
  hover: {
    "&:hover": {
    transform: "scale(1.1, 1.1)",
    boxShadow: "0px 0px 2px 4px"
    }
  },
});

const LeaderBoard = () => {
  const classes = useStyles();
  const [statList, setStatList] = useState([]);
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
    })
  }, [])

  const makeTable = () => {
    return (
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.title}>
              <TableCell>Name</TableCell>
              <TableCell align="right">XP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statList.map((user) => (
              <TableRow key={user.username} className={classes.content}>
                <TableCell>{user.username}</TableCell>
                <TableCell align="right">{user.profile.xp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Box
      style={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)"
      }}>
      <IconButton
        color="primary"
        onClick={handleClickOpen}
        component="span"
        className={classes.hover}
        style={{padding: 0}}
      >
        <img alt="leaderboard" style={{width: "70px"}} src={podium}/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <Grid item xs={12}>
          {makeTable()}
        </Grid>
      </Dialog>
    </Box>
  )
}

export default LeaderBoard;
