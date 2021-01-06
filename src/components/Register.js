import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
const Register = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            required={true}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Password"
            required={true}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="City"
            required={true}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="State"
            required={true}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Register;
