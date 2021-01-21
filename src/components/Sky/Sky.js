import { makeStyles } from "@material-ui/core";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import darkCloud from "../../images/clouds/darkCloud.png";
import lightCLoud from "../../images/clouds/lightCloud.png";
import SkyBackground from "../../images/skybackground.png";


const useStyles = makeStyles({
  container: {
    position: "relative",
    width: "100%",
    height: "40vh"
  },
  Clear: {
    minHeight: "20%",
    width: "100%",
    height: "40vh",
    position: "absolute",
    top: 0,
    left: 0,
    margin: 0,
    backgroundImage: "url(" + lightCLoud + "), url(" + lightCLoud + "), url(" + lightCLoud + ")",
    backgroundPosition: `20px 15px, 500px 70px, 750px 25px`,
    backgroundRepeat: "no-repeat",
  },
  Rain: {
    minHeight: "20%",
    width: "100%",
    height: "40vh",
    position: "absolute",
    top: 0,
    left: 0,
    margin: 0,
    backgroundImage: "url(" + darkCloud + ")",
    backgroundPosition: "20px 15px",
    backgroundRepeat: "repeat-x",
  },
  Cloud: {
    minHeight: "20%",
    width: "100%",
    height: "40vh",
    position: "absolute",
    top: 0,
    left: 0,
    margin: 0,
    backgroundImage: "url(" + lightCLoud + ")",
    backgroundPosition: "20px 15px",
    backgroundRepeat: "repeat-x",
  },
  Snow: {
    minHeight: "20%",
    width: "100%",
    height: "40vh",
    position: "absolute",
    top: 0,
    left: 0,
    margin: 0,
    backgroundImage: "url(" + darkCloud + ")",
    backgroundPosition: "20px 15px",
    backgroundRepeat: "repeat-x",
  },
  transition: {
    width: 1200,
    height: "100%",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
  }
});

/**
 * Top 40% of screen.
 * Contains transition image between sky and ground.
 * Shows weather effects.
 * @param {object} props
 */

const Sky = (props) => {
  const { user } = useContext(UserContext);
  const classes = useStyles();

  // console.log(props.weather)
  return (
    // <div className={classes[props.weather]}>
    <div className={classes.container}>
      <div className={classes.transition}>
        <img src={SkyBackground} alt="sky transition" className={classes.transition}/>
      </div>
      <div
        className={
          props.weather === "Clear"
            ? classes.Clear
            : classes[props.weather] || classes.Clear
        }
        ></div>
    </div>
  );
};


export default Sky;
