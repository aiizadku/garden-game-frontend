import { makeStyles } from "@material-ui/core";
import UserBalance from "../User Balance/UserBalance";
import {UserContext} from '../../contexts/UserContext'
import { useContext } from "react";

const useStyles = makeStyles({
  sky: {
    backgroundColor: "lightblue",
    minHeight: "20%",
    width: "100%",
    height: "30vh",
    position: "relative",
    top: 0,
    left: 0,
    margin: 0,
  }
})

/**
 * Top 30% of screen.
 * Shows weather effects.
 * @param {object} props 
 */
const Sky = (props) => {
  const {user} = useContext(UserContext)
  const classes = useStyles();
  return(
    <div className={classes.sky}>
      {
        user
        &&
      <UserBalance/>
      }
      Weather effects here.
    </div>
  );
};


export default Sky;
