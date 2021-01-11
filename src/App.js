import GardenPage from "./pages/GardenPage";
import React, { Component } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userState: "",
      userCity: "",
    };
  }
  componentWillMount() {
    fetch(
      "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "9d1fd4c712msh8524d11d1eeb2b0p1de58ajsn856245a097d9",
          "x-rapidapi-host":
            "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((location) => {
        this.setState({ userState: location.state, userCity: location.city });
      })
      .catch((err) => {
        console.error(err);
      });

    
  }

  render() {
    return (
      <div className="App">
        <GardenPage
          userState={this.state.userState}
          userCity={this.state.userCity}
        />

      </div>
    );
  }
}

export default App;
