import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.gif";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/HomeL">
          <img src={logo} width="10%" class="d-inline-block align-top" alt="" />
        </a>
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="/AddPlace">
            Add Place
          </a>
        </div>

        <div class="navbar-nav">
          <a class="nav-item nav-link" href="/">
            Logout
          </a>
        </div>
      </nav>
    );
  }
}

export default NavbarPage;
