import Garden from "../Garden/Garden";
import { makeStyles } from "@material-ui/core";
import { useContext, useState, useEffect } from "react";
import {UserContext} from '../../contexts/UserContext'
import UserApi from '../../api/UserApi';
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
  const [currentBalance, setCurrentBalance] = useState(0)
  const {id} = user
  useEffect(() => {
    UserApi.fetchUserBalanceByID(id).then((data) => setCurrentBalance(data.current_balance))
  })

  const addMoney = (plantValue) => {
    const addedAmountObject = {
      user: id,
      current_balance: currentBalance + plantValue
    }
    console.log('adding money')
    UserApi.addToBalanceByID(id, addedAmountObject).then((data) => {
      setCurrentBalance(data.current_balance)
      }
    ) 
  }
  const subtractMoney = (plantValue) => {
    const subtractedAmountObject = {
      user: id,
      current_balance: currentBalance - plantValue
    }
    console.log('subtracting money')
    UserApi.addToBalanceByID(id, subtractedAmountObject).then((data) => {
      setCurrentBalance(data.current_balance)
      }
    ) 
  }

  return (
    <div className={classes.ground}>
      User Balance: { currentBalance }
      <Garden 
      addMoney={addMoney}
      subtractMoney={subtractMoney}
      />
      
    </div>
  )
};
export default Ground;