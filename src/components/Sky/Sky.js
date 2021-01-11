import { makeStyles } from "@material-ui/core";
import UserBalance from "../User Balance/UserBalance";

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
  const classes = useStyles();
  return(
    <div className={classes.sky}>
      <UserBalance/>
      Weather effects here.
    </div>
  );
};


export default Sky;
