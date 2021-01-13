import React, { Component } from 'react'
import UserApi from '../../api/UserApi';
import fetchUserBalanceByID from '../../api/UserApi';

import { UserContext } from '../../contexts/UserContext';


class UserBalance extends Component {

  static contextType = UserContext

  state = {
    current_balance: 0
  }

  componentDidMount(){
    const { id } = this.context.user

    console.log('user context', UserContext._currentValue)
    
    UserApi.fetchUserBalanceByID(id).then((data) => this.setState({ current_balance: data.current_balance}))
    // console.log("state", this.state.userID)
    // console.log(this.state.userID, 'user context in component did mount')
    
  }

  addMoney = () => {
    const { id } = this.context.user
    const addedAmountObject = {
      user: id,
      current_balance: this.state.current_balance + 10
    }
    console.log('adding money')
    UserApi.addToBalanceByID(id, addedAmountObject).then((data) => {
      this.setState({ current_balance: data.current_balance})
      console.log(data.current_balance)
    }) 
  }

  subtractMoney = () => {
    const { id } = this.context.user
    const subtractedAmountObject = {
      user: id,
      current_balance: this.state.current_balance - 10
    }
    console.log('subtracting money')
    UserApi.addToBalanceByID(id, subtractedAmountObject).then((data) => {
      this.setState({ current_balance: data.current_balance})
      console.log(data.current_balance)
    }) 
  }
  
  // if PLANT is harvested
  // add HARVESTED_VALUE to CURRENT_BALANCE
  // .save() value of CURRENT_BALANCE to location in the DB so the changes reflect on backend as will
  
  render(){


    // console.log(this.state.current_balance, 'curent balance')
    console.log(UserContext._currentValue, 'user context in render')

    const { current_balance } = this.state

    return (
      <div>
        User Balance: { current_balance } 
        <button onClick={this.addMoney}>add money</button>
        {
          current_balance > 0
          &&
        <button onClick={this.subtractMoney}>subtract money</button>
        }
      </div>
    )
  }
}

export default UserBalance;