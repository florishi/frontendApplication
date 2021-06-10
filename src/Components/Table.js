import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import axios from "axios";

export class Table extends Component {
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
    return (
      <div>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>description</th>
              <th>price</th>
              <th>address</th>
              <th>city</th>
              <th>beds</th>
              <th>baths</th>
              <th>sqft</th>
              <th>booking</th>
              <th>category</th>
              <th>doctor</th>
              <th>owner</th>
              <th>telnumber</th>
              <th>image</th>
              <th>actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {this.state.propertys.map((propertys) => (
              <tr>
                <td>{propertys.description} </td>
                <td>{propertys.price}</td>
                <td>{propertys.address}</td>
                <td>{propertys.city}</td>
                <td>{propertys.beds}</td>
                <td>{propertys.baths}</td>
                <td>{propertys.sqft}</td>
                <td>{propertys.booking}</td>
                <td>{propertys.category}</td>
                <td>{propertys.doctor}</td>
                <td>{propertys.owner}</td>
                <td>{propertys.telnumber}</td>
                <td>
                  <img
                    src={"http://localhost:5000/" + propertys.image}
                    width="40%"
                    alt=""
                  />
                </td>
                <td></td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    );
  }
}

export default Table;
