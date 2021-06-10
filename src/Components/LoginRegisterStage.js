import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import LoginRegisterBox from "./LoginRegisterBox";
import Background from "./Linth2.png";

export class LoginRegisterStage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "left",
          backgroundSize: "65%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "100vh",
          width: "100%",
        }}
      >
        <MDBRow
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MDBCol
            md="6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></MDBCol>
          <MDBCol
            md="4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoginRegisterBox />
          </MDBCol>
          <MDBCol
            md="2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default LoginRegisterStage;
