import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="card" style={{ width: "18rem" }}>
        <img
          class="card-img-top"
          src={"http://localhost:5000/" + this.props.image}
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">Rs: {this.props.price} /=</h5>
          <p class="card-text">
            Description: <b>{this.props.description}</b>
            <br />
            Address: <b>{this.props.address}</b>
            <br />
            City: <b>{this.props.city}</b>
            <br />
            Beds: <b>{this.props.beds}</b>
            <br />
            Baths: <b>{this.props.baths}</b>
            <br />
            Sqft: <b>{this.props.sqft}</b>
            <br />
            Booking: <b>{this.props.booking}</b>
            <br />
            Category: <b>{this.props.category}</b>
            <br />
            Hospital: <b>{this.props.hospital}</b>
            <br />
            Doctor: <b>{this.props.doctor}</b>
            <br />
            Owner: <b>{this.props.owner}</b>
            <br />
            Tel: <b>{this.props.telnumber}</b>
            <br />
          </p>
          <a href="/" class="btn btn-primary">
            Book Now
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
