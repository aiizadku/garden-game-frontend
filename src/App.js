import GardenPage from "./pages/GardenPage";
import React, { Component } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage.js";
import HomePage from "./pages/HomePage.js";
import UserContextProvider from './contexts/UserContext';
import { BrowserRouter, Route, Link } from "react-router-dom";


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <UserContextProvider>
          <BrowserRouter>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/garden" component={GardenPage} />
          </BrowserRouter>
        </UserContextProvider>
      </div>
    );
  }
}

export default App;
