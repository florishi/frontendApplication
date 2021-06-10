import React, { Component } from 'react'
import add from "./add.jpg"
import rent from "./rent.jpg"
import Nav from "./NavbarPage"

export class HomeLayout extends Component {
    render() {
        return (
            <div>
<Nav/>
<div class="container" style={{display: "flex",
            justifyContent: "space-around",
            alignItems: "center",}}>
  <div class="row" style={{
            textAlign: "center",
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "5%",
          }}>

    <div class="col-md-6">
    <div class="card" style={{width: '20rem'}}>
  <img class="card-img-top" src={rent} alt="" />
  <div class="card-body">
    <h5 class="card-title">Rent Quarantine Place</h5>
    <p class="card-text">Choose the right place for you to quarantine. Special services for you coming from abroad. You too have the opportunity to be quarantined under a hospitals and a doctors</p>
    <a href="/Home" class="btn btn-primary">Rent Quarantine Place</a>
  </div>
</div>
    </div>

    <div class="col-md-6">
      <div class="card" style={{width: '20rem'}}>
  <img class="card-img-top" src={add} alt="" />
  <div class="card-body">
    <h5 class="card-title">Add Quarantine Place</h5>
    <p class="card-text">Give your place for quarantine and earn some money yourself. This is a great opportunity for you to make money by supporting the current situation in the country</p>
    <a href="/AddPlace" class="btn btn-primary">Add Quarantine Place</a>
  </div>
</div>
    </div>
    
  </div>
</div>
                

                
            </div>
        )
    }
}

export default HomeLayout
