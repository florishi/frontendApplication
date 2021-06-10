import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import { Redirect, Link } from "react-router-dom";
import swal from "sweetalert";

var jwt = require("jsonwebtoken");
const axios = require("axios");

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      success: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.email === "" && this.state.password === "") {
      swal(
        "validation error detected",
        "You must fill in all of the fields",
        "error"
      );
    } else {
      this.checkAuthorization();
    }
  };

  async checkAuthorization() {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    try {
      const responce = await axios({
        method: "post",
        url: "http://localhost:5000/auth",
        data: data,
      });

      if (responce.data.massage === "UNAUTHORIZED") {
        swal("Invalid login", "please try again", "error");
      } else if (responce.data.massage === "AUTHORIZED") {
        localStorage.setItem("token", responce.data.token);
        var decoded = jwt.decode(localStorage.getItem("token"));
        console.log("user", decoded);
        this.setState({ success: true });
        swal("login successful", "your login successful", "success");
      } else {
        swal("Invalid login", "please try again", "error");
      }
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    if (this.state.success) {
      return <Redirect to={"/HomeL"} />;
    } else if (this.state.register) {
      return <Redirect to={"/"} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="h5 text-center py-4">Login</p>
        <div className="grey-text">
          <MDBInput
            label="Your email"
            icon="envelope"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            group
            type="email"
            validate
            error="wrong"
            success="right"
            size="sm"
          />
          <MDBInput
            label="Your password"
            icon="lock"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            group
            type="password"
            validate
            size="sm"
          />
        </div>
        <div className="text-center py-4 mt-0">
          <button type="submit" class="btn btn-primary btn-block">
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
