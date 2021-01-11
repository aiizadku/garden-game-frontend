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
import UserAPI from '../api/UserApi'

const LoginPage = (props) => {
  const [weather, setWeather] = useState("");
  console.log(props);
  const [error, setError] = useState({'error': false, 'message': null})
  const { dispatch } = useContext(UserContext)

  useEffect(() => {
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${props.userCity}%2C${props.userState}%2CUSA&units=imperial`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "9787f1e58amshcbfb9f8a0dfd985p1cb905jsn7b1c9d802fc2",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((condition) => {
        setWeather(condition.weather[0].main);
      })
      .catch((err) => {
        console.error(err);
      });
  });

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
      

      dispatch({type: 'LOGIN_USER', data})
      console.log("go to the HomePage")
      // return props.history.push('/')
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
