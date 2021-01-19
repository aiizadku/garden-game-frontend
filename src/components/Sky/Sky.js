import { makeStyles, TextareaAutosize } from "@material-ui/core";
import UserBalance from "../User Balance/UserBalance";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
 

const useStyles = makeStyles({
  Clear: {
    backgroundColor: "lightblue",
    minHeight: "20%",
    width: "100%",
    height: "30vh",
    position: "relative",
    top: 0,
    left: 0,
    margin: 0,
  },
  Rain: {
    backgroundColor: "blue",
    minHeight: "20%",
    width: "100%",
    height: "30vh",
    position: "relative",
    top: 0,
    left: 0,
    margin: 0,
  },
  Cloud: {
    backgroundColor: "cyan",
    minHeight: "20%",
    width: "100%",
    height: "30vh",
    position: "relative",
    top: 0,
    left: 0,
    margin: 0,
  },
  Snow: {
    backgroundColor: "snow",
    minHeight: "20%",
    width: "100%",
    height: "30vh",
    position: "relative",
    top: 0,
    left: 0,
    margin: 0,
    backgroundImage: `url(${"https://thumbs.gfycat.com/AngryPoorAmericanbobtail-max-1mb.gif"})`,
    backgroundSize : 'cover',
    backgroundRepeat: 'no-repeat'
  },
});

/**
 * Top 30% of screen.
 * Shows weather effects.
 * @param {object} props
 */


const Sky = (props) => {
  const { user } = useContext(UserContext);
  const classes = useStyles();

  
  console.log(props.weather)
  return (
    // <div className={classes[props.weather]}>
    <div
      className={
        props.weather === "Clear"
          ? classes.Clear
          : classes[props.weather] || classes.Clear
      }
    >
      <LeaderBoard/>
      
    </div>
  );
};

export default Sky;
