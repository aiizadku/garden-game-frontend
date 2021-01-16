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
  const [currentXp, setCurrentXp] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(0)

  useEffect(() => {
    const { id } = gameState.user
    // console.log("useEffect from Ground.js: ", gameState)
    UserApi.fetchUserBalanceByID(id).then((data) => {
      setCurrentBalance(data.current_balance)
      setCurrentXp(data.xp)
      setCurrentLevel(data.current_level)
    })
  })

  useEffect(()=>{

    const { id } = gameState.user

    if (currentXp % 40 === 0 & currentXp != 0){

      const levelObject = {
        user: id,
        current_level: currentLevel + 1
      }
      UserApi.addToBalanceByID(id, levelObject)
    }
  }, [currentXp])


  const addMoney = (plantValue, xpValue) => {

    const { id } = gameState.user
    const addedAmountObject = {
      user: id,
      current_balance: currentBalance + plantValue,
      xp: currentXp + xpValue,
    }
   
    UserApi.addToBalanceByID(id, addedAmountObject)
    .then((data) => {
      setCurrentBalance(data.current_balance)
      setCurrentXp(data.xp)
    })
  
  // if (currentXp == 40) {
  // setCurrentLevel(currentLevel + 1)
  // setCurrentXp(0)
  // }
  // console.log('current level after: ', currentLevel)
  // const levelObject = {
  //   user: id,
  //   current_level: currentLevel,
  //   xp: currentXp
  // }
  // UserApi.addToBalanceByID(id, levelObject)
}

  // if (currentXp % 40 === 0 & currentXp != 0){

  //   const { id } = gameState.user
  //   const levelObject = {
  //     user: id,
  //     current_level: currentLevel + 1,
  //   }
  //   UserApi.addToBalanceByID(id, levelObject)
    
  // }


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
        User XP: { currentXp }
        User Level: { currentLevel }
      <Garden 
      addMoney={addMoney}
      subtractMoney={subtractMoney}
      />
      
    </div>
  )
};
export default Ground;