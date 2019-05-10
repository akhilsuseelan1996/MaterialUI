import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class login extends Component {
  render() {
    return (
      <div>
        <div className="regisuser">
          <h3>User Login</h3>
        </div>
        <div>
          <FormControl margin="normal">
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoFocus />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
        </div>
        <br />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Sign in
          </Button>
        </div>
      </div>
    );
  }
}

export default login;
