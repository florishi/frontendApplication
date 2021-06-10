import React, { Component } from "react";
import Card from "./Card";
import Nav from "./NavbarPage";
import axios from "axios";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      propertys: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/property").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          propertys: response.data.map((propertys) => propertys),
        });
      }
    });
  }

  render() {
    console.log(this.state.propertys);
    return (
      <div>
        <Nav />
        <div class="container">
          <div
            className="row"
            style={{
              textAlign: "center",
              marginLeft: "1%",
              marginRight: "1%",
              marginTop: "1%",
            }}
          >
            {this.state.propertys.map((propertys) => (
              <div
                className="col-md-3"
                style={{
                  textAlign: "center",
                  marginLeft: "3%",
                  marginRight: "3%",
                  marginTop: "3%",
                }}
              >
                <Card
                  id={propertys._id}
                  description={propertys.description}
                  price={propertys.price}
                  address={propertys.address}
                  city={propertys.city}
                  beds={propertys.beds}
                  baths={propertys.baths}
                  sqft={propertys.sqft}
                  booking={propertys.booking}
                  category={propertys.category}
                  hospital={propertys.hospital}
                  doctor={propertys.doctor}
                  owner={propertys.owner}
                  telnumber={propertys.telnumber}
                  image={propertys.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
