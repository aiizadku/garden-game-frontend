import Sky from "../components/Sky/Sky";
import Ground from "../components/Ground/Ground";
import { makeStyles } from "@material-ui/core";
import TestButton from "../components/TestButton/TestButton";

const useStyles = makeStyles({
  container: {
    "textAlign": "center"
  }
});

const GardenPage = props => {
  const classes = useStyles();
  return(
    <div className={classes.container}>
      <Sky />
      {/*<TestButton />*/ null}
      <Ground />
    </div>
  );
};


export default GardenPage;
