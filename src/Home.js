import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ustLogo from "./Images/ustlogo.png";
import garden1 from "./Images/garden1.jpeg";
import emergency from "./Images/emergency.jpg";

class Home extends Component {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={emergency} className="App-logo" alt="logo" />
          <p>Finder</p>
        </header>
        <div>
          <Paper>
            <Tabs indicatorColor="primary" textColor="blue" centered>
              <Tab label="Home" />
              <Tab label="User Registration" />
              <Tab label="Login" />
              <Tab label="Contact" />
            </Tabs>
          </Paper>
        </div>
        <div>
          <img
            src={garden1}
            alt="sample"
            style={{ width: "5%", height: "0.1%", paddingTop: "50px" }}
          />
          <p>sad</p>
        </div>
        <div>
          <Button onClick={this.next} variant="outlined" color="inherit">
            Click
          </Button>
        </div>
        <div className="footer">
          <h6>
            <img
              src={ustLogo}
              alt="ustLogo"
              style={{ width: "8%", height: "0.1%" }}
            />
          </h6>
        </div>
        <div>
          <div>
            <Button
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              Open Menu
            </Button>
          </div>
        </div>
      </div>
    );
  }
  next = () => {
    window.location = "http://localhost:3000/register";
  };
}

export default Home;
