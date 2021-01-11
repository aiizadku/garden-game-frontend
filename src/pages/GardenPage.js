import Sky from "../components/Sky/Sky";
import Ground from "../components/Ground/Ground";
import { makeStyles } from "@material-ui/core";

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
      <Ground />
    </div>
  );
};


export default GardenPage;
