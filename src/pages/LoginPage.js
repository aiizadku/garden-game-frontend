import React, { useContext, useEffect, useState } from "react";
import { UserContext } from '../contexts/UserContext';
import Alert from '../components/alerts/DefaultAlert'
import "./LoginPage.css";
import {
  TextField,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import Register from "../components/Register";
import UserAPI from '../api/UserApi';
import getWeather from "../api/WeatherApi";
import { Redirect } from 'react-router'

const LoginPage = (props) => {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState({'error': false, 'message': null})
  const { setLoggedIn, gameState, setGameData } = useContext(UserContext)
  
  // useEffect(() => {
  //   getWeather(props.userCity, props.userState).then(json => {
  //     setWeather(json);
  //   })
  //   }, [props.userCity, props.userState]);
    




  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("username", evt.target[0].value)
    console.log("password", evt.target[2].value)
    const userInfo = {
      username: evt.target[0].value,
      password: evt.target[2].value,

    }
    let response = await UserAPI.login(userInfo)
    let data = await response.json()
    if (data['non_field_errors']) {
      setError({'error': true, 'message': 'Invalid username or password.'})
    } else {
      if(data.hasOwnProperty('token')){
        setGameData(data) // updating gameState context with actual data
        setLoggedIn(data)
      }
      
      return props.history.push('/garden')
    }
    
  }

  return (

    // grid container, holds grid items
    
    <Grid container spacing={1} align="center" className="container">
      {error['error'] && <Alert type='error' message={error.message} />}
      <Grid item xs={12}>
        <Typography component="h4" variant="h4">
          Login
        </Typography> 
      </Grid>
      <Grid item xs={12}>
      <form onSubmit={handleSubmit}>
      <Grid item xs={12}>
        
          <TextField
            required={true}
            label="Username"
            placeholder="Username"
            variant="outlined"
            name="username"
          ></TextField>
          </Grid>
          <br/>
      
          <Grid item xs={12}>
          <TextField
            required={true}
            type="password"
            label="Password"
            placeholder="Password"
            variant="outlined"
          ></TextField>

          </Grid>
        
          <br/>
          <Grid item xs={12}>
        <Button variant="contained" color="primary" type="submit" >
          Login
        </Button>
        </Grid>
      
      
      
      </form>
      </Grid>
      <Grid item xs={12}>
        {/* register component */}
        <Register />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
