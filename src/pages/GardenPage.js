import Sky from "../components/Sky/Sky";
import Ground from "../components/Ground/Ground";
import { makeStyles } from "@material-ui/core";
import TestButton from "../components/TestButton/TestButton";
import getLocation from "../api/LocationApi";
import React, { useEffect, useState } from "react";

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
  //   getLocation();
  // });

  getLocation()
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Sky />
      {/*<TestButton />*/ null}
      <Ground />
    </div>
  );
};

export default GardenPage;
