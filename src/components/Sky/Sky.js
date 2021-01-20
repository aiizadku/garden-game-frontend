import { makeStyles, TextareaAutosize } from "@material-ui/core";
import UserBalance from "../User Balance/UserBalance";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import darkCloud from "../../images/clouds/darkCloud.png";
import lightCLoud from "../../images/clouds/lightCloud.png";
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
    backgroundImage: "url(" + lightCLoud + "), url(" + lightCLoud + "), url(" + lightCLoud + ")",
    backgroundPosition: "20px 15px, 600px, 1500px ",
    backgroundRepeat: "no-repeat",
  },
  Rain: {
    backgroundColor: "lightblue",
    minHeight: "20%",
    width: "100%",
    height: "30vh",
    position: "relative",
    top: 0,
    left: 0,
    margin: 0,
    backgroundImage: "url(" + darkCloud + ")",
    backgroundPosition: "20px 15px",
    backgroundRepeat: "repeat-x",
  },
  Cloud: {
    backgroundColor: "lightblue",
    minHeight: "20%",
    width: "100%",
    height: "30vh",
    position: "relative",
    top: 0,
    left: 0,
    margin: 0,
    backgroundImage: "url(" + lightCLoud + ")",
    backgroundPosition: "20px 15px",
    backgroundRepeat: "repeat-x",
  },
  Snow: {
    backgroundColor: "lightblue",
    minHeight: "20%",
    width: "100%",
    height: "30vh",
    position: "relative",
    top: 0,
    left: 0,
    margin: 0,
    backgroundImage: "url(" + darkCloud + ")",
    backgroundPosition: "20px 15px",
    backgroundRepeat: "repeat-x",
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

  // console.log(props.weather)
  return (
    // <div className={classes[props.weather]}>
    <div
      className={
        props.weather === "Clear"
          ? classes.Clear
          : classes[props.weather] || classes.Clear
      }
    >

      {/* <LeaderBoard /> */}

    </div>
  );
};

export default Sky;
