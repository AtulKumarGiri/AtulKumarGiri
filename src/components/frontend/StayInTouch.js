import React from 'react';
import {Form, FormGroup, Input, Button } from 'reactstrap';

function StayInTouch() {
  return (
    <div className="container stayInTouch-container text-center d-flex align-items-center justify-content-center">
        <div className="stayTouch">
            <div className="heading">
                <h1>Stay In Touch</h1>
                <p>Enter your email address to register to my newsletter subscription!</p>
                <span></span>
            </div>
            <Form>
                <FormGroup>
                    <Input type="email" name="email" placeholder="Enter email address" />
                </FormGroup>
                <Button>Subscribe</Button>
            </Form>
        </div>
    </div>
  )
}

export default StayInTouch