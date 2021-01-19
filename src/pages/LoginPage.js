import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Alert from "../components/alerts/DefaultAlert";
import "./LoginPage.css";
import { TextField, Typography, Button, Grid } from "@material-ui/core";
import Register from "../components/Register";
import UserAPI from "../api/UserApi";
import getWeather from "../api/WeatherApi";
import { makeStyles } from '@material-ui/core/styles';
import title2 from '../images/title2.png';
import { Redirect } from "react-router";
import getIP from "../api/LocationApi";
import homePage from '../images/homepage.png';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/000/419/052/original/vector-a-beautiful-garden-landscape.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height:'100vh'
  },
  title: {
    width: '30%',
    height: '30%',
    align: "left",
  },
  container: {
    width: '30%',
    margin: 'auto',
    padding: '10px',
    marginTop: '0px',
    borderRadius: '5px',
    boxShadow: '5px 10px 10px #888888'
  },
  button: {
    backgroundColor: "#e9b0df"
  }
}))

const LoginPage = (props) => {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState({'error': false, 'message': null})
  const { setLoggedIn, gameState, setGameData } = useContext(UserContext)
  const classes = useStyles();
  
  // useEffect(() => {
  //   getIP()
  // });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // console.log("username", evt.target[0].value)
    // console.log("password", evt.target[2].value)
    const userInfo = {
      username: evt.target[0].value,
      password: evt.target[2].value,
    };
    let response = await UserAPI.login(userInfo);
    let data = await response.json();
    if (data["non_field_errors"]) {
      setError({ error: true, message: "Invalid username or password." });
    } else {
      if(data.hasOwnProperty('token')){
        setGameData(data) // updating gameState context with actual data
        setLoggedIn(data)
      }
      
      return props.history.push('/garden')
    }
  };

  return (
    <div className={classes.root}>
      <div >
      <img className ={classes.title} object-position='left top' src={title2}></img>
      <div classname={classes.container}>

      <Grid container spacing={1} align="center" className="container" >
        {error["error"] && <Alert type="error" message={error.message} />}
        <Grid item xs={12}>
          <Typography component="h4" variant="h4" fontSize='30px'>
          𝕃𝕠𝕘𝕚𝕟
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
            <br />

            <Grid item xs={12}>
              <TextField
                required={true}
                type="password"
                label="Password"
                placeholder="Password"
                variant="outlined"
              ></TextField>
            </Grid>

            <br />
            <Grid item xs={12}>
              <Button variant="contained"  className={classes.button}
               type="submit">
                 LOGIN
              </Button>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12}>
          {/* register component  */}
          <Register />
        </Grid>
      </Grid> 
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
