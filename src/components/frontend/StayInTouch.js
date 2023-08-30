import React from 'react';
import {showSuccessAlert} from './layouts/Alerts';
import {Form, FormGroup, Input, Button } from 'reactstrap';

function StayInTouch(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'#101010',
        backgroundColor: props.mode ==='dark'?'#101010':'white'
    }

  return (
    <div className="container stayInTouch-container text-center d-flex align-items-center justify-content-center">
        <div className="stayTouch">
            <div className="heading">
                <h1 style={myStyle}>Stay In Touch</h1>
                <p style={myStyle}>Enter your email address to register to my newsletter subscription!</p>
                <span></span>
            </div>
            <Form>
                <FormGroup>
                    <Input style={myStyle} className={`bg-${props.mode}`} type="email" name="email" placeholder="Enter email address to subscribe" />
                </FormGroup>
                <Button onClick={showSuccessAlert} style={myStyle}>Subscribe</Button>
            </Form>
        </div>
    </div>
  )
}

export default StayInTouch