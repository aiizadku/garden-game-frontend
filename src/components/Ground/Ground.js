import Garden from "../Garden/Garden";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  ground: {
    height: '70vh',
    position: 'relative',
    backgroundColor: "darkgreen"
  }
});

/**
 * Bottom 70% of screen.
 * Places garden in center of ground.
 * @param {object} props 
 */
const Ground = props => {
  const classes = useStyles();
  return (
    <div className={classes.ground}>
      <Garden />
    </div>
  )
};


export default Ground;
