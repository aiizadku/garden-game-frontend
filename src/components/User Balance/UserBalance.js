import React, { Component } from 'react'
import UserApi from '../../api/UserApi';
import fetchUserBalanceByID from '../../api/UserApi';


class UserBalance extends Component {

  state = {
    current_balance: 0
  }

  componentDidMount(){
    // TO DO: 
    // argument for fetchUserBalance needs to be current user's ID
    UserApi.fetchUserBalanceByID(1).then((data) => this.setState({ current_balance: data.current_balance}))
    
  }

  addMoney = () => {
    const addedAmountObject = {
      user: 1,
      current_balance: this.state.current_balance + 10
    }
    console.log('adding money')
    UserApi.addToBalanceByID(1, addedAmountObject).then((data) => {
      this.setState({ current_balance: data.current_balance})
      console.log(data.current_balance)
    }) 
  }

  subtractMoney = () => {
    const subtractedAmountObject = {
      user: 1,
      current_balance: this.state.current_balance - 10
    }
    console.log('subtracting money')
    UserApi.addToBalanceByID(1, subtractedAmountObject).then((data) => {
      this.setState({ current_balance: data.current_balance})
      console.log(data.current_balance)
    }) 
  }
  
  // if PLANT is harvested
  // add HARVESTED_VALUE to CURRENT_BALANCE
  // .save() value of CURRENT_BALANCE to location in the DB so the changes reflect on backend as will
  
  render(){

    console.log(this.state.current_balance)

    const { current_balance } = this.state

    return (
      <div>
        User Balance: { current_balance } 
        <button onClick={this.addMoney}>add money</button>
        <button onClick={this.subtractMoney}>subtract money</button>
      </div>
    )
  }
}

export default UserBalance;