import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import {
  FormControl,
  TextField,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import Register from "../components/Register";

const LoginPage = (props) => {
  const [weather, setWeather] = useState("");
  console.log(props);
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

  return (
    // grid container, holds grid items
    <Grid container spacing={1} align="center" className="container">
      <Grid item xs={12}>
        <Typography component="h4" variant="h4">
          Login
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <TextField
            required={true}
            label="Username"
            placeholder="Username"
            variant="outlined"
          ></TextField>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <TextField
            required={true}
            type="password"
            label="Password"
            placeholder="Password"
            variant="outlined"
          ></TextField>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Grid>
      <Grid item xs={12}>
        {/* register component */}
        <Register />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
