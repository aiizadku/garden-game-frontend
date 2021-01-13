import Sky from "../components/Sky/Sky";
import Ground from "../components/Ground/Ground";
import { makeStyles } from "@material-ui/core";
import getLocation from "../api/LocationApi";
import React, { useEffect, useState } from "react";
import getIP from "../api/LocationApi";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
  },
});

const GardenPage = (props) => {
  // const [userState, setUserState] = useState("");
  // const [city, setCity] = useState("");
  // const [error, setError] = useState({ error: false, message: null });

  // useEffect(() => {
  //   getIP();
  // });

  // getLocation();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Sky />
      <Ground />
    </div>
  );
};

export default GardenPage;
