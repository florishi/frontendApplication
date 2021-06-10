import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import swal from "sweetalert";
const axios = require("axios");

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  componentDidMount = () => {};

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.name === "" &&
      this.state.email === "" &&
      this.state.password === "" &&
      this.state.confirmPassword === ""
    ) {
      swal(
        "validation error detected",
        "You must fill in all of the fields",
        "error"
      );
    } else if (this.state.name === "") {
      swal(
        "validation error detected",
        "You must fill your name field",
        "error"
      );
    } else if (this.state.email === "") {
      swal("validation error detected", "You must fill email field", "error");
    } else if (this.state.password === "") {
      swal(
        "validation error detected",
        "You must fill password field",
        "error"
      );
    } else if (this.state.confirmPassword === "") {
      swal(
        "validation error detected",
        "You must fill confirm password field",
        "error"
      );
    } else if (this.state.password !== this.state.confirmPassword) {
      swal("validation error detected", "confirm password incorrect", "error");
    } else {
      this.sendData();
    }
  };

  async sendData() {
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    try {
      const responce = await axios({
        method: "post",
        url: "http://localhost:5000/users",
        data: data,
      });
      console.log(responce);
      if (responce.data.message === "ALREADYTAKEN") {
        swal(
          "email already taken",
          "Please register with another email",
          "error"
        );
      } else if (responce.status === 201) {
        this.setState({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        swal(
          "registration successful",
          "Now please login our system",
          "success"
        );
      } else {
      }
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="h5 text-center py-4">Register</p>
        <div className="grey-text">
          <MDBInput
            label="Your name"
            icon="user"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            group
            type="text"
            validate
            error="wrong"
            success="right"
            size="sm"
          />
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
          <MDBInput
            label="Confirm password"
            icon="lock"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            name="confirmPassword"
            group
            type="password"
            validate
            size="sm"
          />
        </div>
        <div className="text-center py-4 mt-0">
          <button type="submit" class="btn btn-primary btn-block">
            Register
          </button>
        </div>
      </form>
    );
  }
}

export default Register;
