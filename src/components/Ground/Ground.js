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
  const classes = useStyles();
  const { gameState } = useContext(UserContext)
  const [currentBalance, setCurrentBalance] = useState(0)

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
    // Fetch current_balance
    UserApi.fetchUserBalanceByID(id)
    .then((data) => {
      // Then add and set new balance
      const addedAmountObject = {
        user: id,
        current_balance: data.current_balance + plantValue
      }
      console.log(
      `Adding money.
      Previous Balance  : $${data.current_balance}
      Amount to add     : $${plantValue}
      New Total Balance : $${addedAmountObject.current_balance}`);

      UserApi.addToBalanceByID(id, addedAmountObject).then((data) => {
        setCurrentBalance(data.current_balance)
        }
      )
    });
  }

  const subtractMoney = (plantValue) => {
    const { id } = gameState.user
    // Fetch current_balance
    UserApi.fetchUserBalanceByID(id)
    .then((data) => {
      // Then subtract and set new balance
      const addedAmountObject = {
        user: id,
        current_balance: data.current_balance - plantValue
      }
      console.log(
      `Subtracting money.
      Previous Balance  : $${data.current_balance}
      Amount to Subtract: $${plantValue}
      New Total Balance : $${addedAmountObject.current_balance}`);

      UserApi.addToBalanceByID(id, addedAmountObject).then((data) => {
        setCurrentBalance(data.current_balance)
        }
      )
    });
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
