import GardenPage from "./pages/GardenPage";
import React, { Component } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage.js";
import HomePage from "./pages/HomePage.js";
import {UserContext} from './contexts/UserContext';
import { BrowserRouter, Route, Link } from "react-router-dom";
import UserAPI from './api/UserApi'


class App extends Component {

  state = {
    token: localStorage.getItem("token"),
    isLoggedIn: false,
    gameState: {
      user: {},
      garden: {rows: 0, columns: 0},
      profile: {}
    }
  }

  setLoggedIn = (data) => {
    if(data.token){
      localStorage.setItem('token', data.token)
      this.setState({isLoggedIn: true, token: data.token})
    }else{
      this.setState({isLoggedIn: false, token: null})
    }
  }

  setGameData = (state) => {
    this.setState({gameState: {garden: state.garden, user: state.user, profile: state.profile}})
  }

  componentDidMount(){
    UserAPI.currentUser(this.state.token)
    .then(resp => resp.json())
    .then(data => {
      let newState = {...this.state.gameState}
      newState.user.id = data.id
      newState.user.username = data.username
      newState.profile = data.profile
      newState.garden = data.garden
      this.setState({gameState: newState})
    })
  }

  render() {
    return (
      <div className="App">
        <UserContext.Provider
          value={{isLoggedIn: this.state.isLoggedIn, setLoggedIn: this.setLoggedIn, token: this.state.token, gameState: this.state.gameState, setGameData: this.setGameData}}>
          <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/garden" component={GardenPage} />
          </BrowserRouter>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
