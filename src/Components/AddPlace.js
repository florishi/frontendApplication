import React, { Component } from 'react'
import Form from "./Form"

export class AddPlace extends Component {
    render() {
        return (
            <div style={{margin: '5%'}}>
                <h3>Add Quarantine Place</h3>
                <Form/>
            </div>
        )
    }
}

export default AddPlace
