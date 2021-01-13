import Garden from "../Garden/Garden";
import { makeStyles } from "@material-ui/core";
import { useContext } from "react";
import {UserContext} from '../../contexts/UserContext'

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
  const {user} = useContext(UserContext)
  const classes = useStyles();
  console.log('from ground js', user)
  return (
    <div className={classes.ground}>
      {
        user
        &&
      <Garden />
      }
    </div>
  )
};


export default Ground;
