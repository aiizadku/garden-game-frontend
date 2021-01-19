import React, { useState } from "react";
import UserApi from "../api/UserApi";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Alert from "./alerts/DefaultAlert";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#944e6c",
  },
  button2: {
    backgroundColor: "#e9b0df",
  },
  dialog: {
    backgroundColor: "#c6ebc9"
  }
}))

const Register = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const classes = useStyles();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError({ error: false });
  };

  const handleRegister = async (evt) => {
    evt.preventDefault();

    let userInfo = {
      username: evt.target[0].value,
      password: evt.target[1].value,
    };

    let response = await UserApi.registerUser(userInfo);
    let data = await response.json();

    if (response.ok === false) {
      setError({ error: true, message: data.username[0] });
    } else {
      handleClose();
      // RELOADING THE PAGE IS ANOTHER OPTION, BUT NOT NECESSARY. HANDLECLOSE LOOKS SMOOTHER
      // window.location.reload()
    }
  };

  return (
    <div>
      <Button variant="contained" className={classes.button} onClick={handleClickOpen}>
        Register
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className={classes.dialog}id="form-dialog-title">Register</DialogTitle>

        <DialogContent className={classes.dialog}>
          <DialogContentText>
            To register and make your own garden, please register your username and password here.
          </DialogContentText>
          {/* FORM */}

          <form  onSubmit={handleRegister} id="myform">
            {error["error"] && (
              <div>
                <Alert type="error" label="Error" message={error.message} />
              </div>
            )}
            <TextField
              autoFocus
              margin="dense"
              label="Username"
              required={true}
              fullWidth
            />
            <TextField
              margin="dense"
              type="password"
              label="Password"
              required={true}
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions className={classes.dialog}>
          <Button onClick={handleClose} className={classes.button}>
            Cancel
          </Button>
          <Button type="submit" form="myform" className={classes.button2}>
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Register;
