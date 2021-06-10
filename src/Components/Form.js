import React, { Component } from "react";
const axios = require("axios");

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      price: "",
      address: "",
      city: "",
      beds: "",
      baths: "",
      sqft: "",
      booking: "",
      category: "",
      hospital: "",
      doctor: "",
      owner: "",
      telnumber: "",
      image: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();

    let formdata = new FormData();
    formdata.set("description", this.state.description);
    formdata.set("price", this.state.price);
    formdata.set("address", this.state.address);
    formdata.set("city", this.state.city);
    formdata.set("beds", this.state.beds);
    formdata.set("baths", this.state.baths);
    formdata.set("sqft", this.state.sqft);
    formdata.set("booking", this.state.booking);
    formdata.set("category", this.state.category);
    formdata.set("hospital", this.state.hospital);
    formdata.set("doctor", this.state.doctor);
    formdata.set("owner", this.state.owner);
    formdata.set("telnumber", this.state.telnumber);
    formdata.set("image", this.state.image);

    await axios.post("http://localhost:5000/property", formdata).then((res) => {
      console.log("res", res);
      this.setState({
        description: "",
        price: "",
        address: "",
        city: "",
        beds: "",
        baths: "",
        sqft: "",
        booking: "",
        category: "",
        hospital: "",
        doctor: "",
        owner: "",
        telnumber: "",
        image: null,
      });
    });
  };

  OnChangeImage(e) {
    console.log(e.target.files, "$$$$");

    let file = e.target.files[0];

    this.setState({
      image: file,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input
                type="text"
                class="form-control"
                id="Description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="Enter Description"
              />
              {/* <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Price</label>
              <input
                type="number"
                class="form-control"
                id="Price"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
                placeholder="Enter Price"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">Address</label>
              <input
                type="text"
                class="form-control"
                id="Address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                placeholder="Enter Price"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputEmail1">City</label>
              <input
                type="text"
                class="form-control"
                id="City"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                placeholder="Enter Price"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Beds</label>
              <input
                type="number"
                class="form-control"
                id="Beds"
                name="beds"
                value={this.state.beds}
                onChange={this.handleChange}
                placeholder="Enter Beds"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Baths</label>
              <input
                type="number"
                class="form-control"
                id="Baths"
                name="baths"
                value={this.state.baths}
                onChange={this.handleChange}
                placeholder="Enter Baths"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Sqft</label>
              <input
                type="number"
                class="form-control"
                id="Sqft"
                name="sqft"
                value={this.state.sqft}
                onChange={this.handleChange}
                placeholder="Enter Sqft"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Booking</label>
              <input
                type="text"
                class="form-control"
                id="Booking"
                name="booking"
                value={this.state.booking}
                onChange={this.handleChange}
                placeholder="Enter Booking"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Category</label>
              <input
                type="text"
                class="form-control"
                id="Category"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
                placeholder="Enter Category"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Hospital</label>
              <input
                type="text"
                class="form-control"
                id="Hospital"
                name="hospital"
                value={this.state.hospital}
                onChange={this.handleChange}
                placeholder="Enter Hospital"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Doctor</label>
              <input
                type="text"
                class="form-control"
                id="Doctor"
                name="doctor"
                value={this.state.doctor}
                onChange={this.handleChange}
                placeholder="Enter Doctor"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Owner</label>
              <input
                type="text"
                class="form-control"
                id="Owner"
                name="owner"
                value={this.state.owner}
                onChange={this.handleChange}
                placeholder="Enter Owner"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Telephone Number</label>
              <input
                type="text"
                class="form-control"
                id="telnumber"
                name="telnumber"
                value={this.state.telnumber}
                onChange={this.handleChange}
                placeholder="Enter Telephone Number"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Image</label>
              <input
                type="file"
                class="form-control"
                id="Image"
                name="image"
                // value={this.state.image}
                onChange={(e) => this.OnChangeImage(e)}
                placeholder="Image"
              />
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
