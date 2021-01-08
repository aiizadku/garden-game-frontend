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

const Register = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });

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
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Register
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Register</DialogTitle>

        <DialogContent>
          <DialogContentText>
            To register to this website, please enter your username, password,
            city, and state here.
          </DialogContentText>
          {/* FORM */}

          <form onSubmit={handleRegister} id="myform">
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
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" form="myform" color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Register;
