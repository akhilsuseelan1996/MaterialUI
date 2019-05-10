//USER REGISTRATION
import React, { Component } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import Phone from "@material-ui/icons/Phone";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

class Reg extends Component {
  state = {
    showPassword: false,
    password: ""
  };
  render() {
    return (
      <div>
        <div className="regisuser">
          <h3>User Registration</h3>
        </div>
        <div className="locktextfield">
          <TextField
            id="input-with-icon-textfield"
            label="Enter Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )
            }}
          />
        </div>
        <br />
        <div>
          <TextField
            id="input-with-icon-textfield"
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              )
            }}
          />
        </div>
        <br />
        <div>
          <TextField
            id="input-with-icon-textfield"
            label="Contact No."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              )
            }}
          />
        </div>
        <br />

        <div>
          <Input
            placeholder="Enter password"
            id="adornment-password"
            type={this.state.showPassword ? "text" : "password"}
            value={this.state.password}
            onChange={this.handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </div>
    );
  }
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
}

export default Reg;
