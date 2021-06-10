import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MDBCard, MDBCardBody } from "mdbreact";
import Login from "./Login";
import Register from "./Register";
import logo from "./logo.gif"

export class LoginRegisterBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "login",
    };
  }

  render() {
    return (
      <MDBCard
        style={{
          width: "90%",
          boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.50)",
        }}
      >
        <MDBCardBody>
        <div style={{textAlign: 'center'}}>
                <img src={logo} width="60%" alt="" />
                </div>
          {this.state.type === "login" ? (
            <div>
                
              <Login />
              <p align="center">
                <Link onClick={() => this.setState({ type: "register" })}>
                  Don't have an account?
                </Link>
              </p>
            </div>
          ) : (
            <div>
              <Register />
              <p align="center">
                <Link onClick={() => this.setState({ type: "login" })}>
                  Already have an account?
                </Link>
              </p>
            </div>
          )}
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default LoginRegisterBox;
