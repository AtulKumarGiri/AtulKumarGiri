import React from 'react';
import {showTouchAlert} from './layouts/Alerts';
import {Button} from 'reactstrap';

function Home() {
  return (
    <div className='container-fluid'>
        <div className="container home-container d-md-flex align-items-center justify-content-between d-sm-block ">
            <div className="info">
                <div className="content-heading">
                    <h1>I'm Atul Kumar Giri</h1>
                </div>
                <div className="content">
                    <p className='my-4 mb-5'>I have built many web applications and websites using Laravel for clients in different industries, and my portfolio demonstrates my expertise in Laravel development and delivering top-notch projects that fulfill my clients’ requirements.</p>

                    <Button onClick={showTouchAlert}>Get in Touch</Button>
                </div>
            </div>
            <div className="img text-right">
                <img src="./assets/images/personal/2nd.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home