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
  const { gameState } = useContext(UserContext)

  const classes = useStyles();
  const [currentBalance, setCurrentBalance] = useState(0)
  // const {id} = user

  useEffect(() => {
    const { id } = gameState.user
    console.log("useEffect from Ground.js: ", gameState)
    UserApi.fetchUserBalanceByID(id).then((data) => {
      console.log("fetchUserBalance: ", data)
      setCurrentBalance(data.current_balance)
    })
  })

  const addMoney = (plantValue) => {
    const { id } = gameState.user
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
    const { id } = gameState.user
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