import React from 'react';

import { Button } from 'reactstrap';

function Services() {
  return (
    <div className="container services-container d-flex align-items-center justify-content-center">
        <div className="servicesContainer text-center">
            <div className="heading">
                <h1>What Services I'm Providing</h1>
                <span></span>
            </div>
            <div className="container d-md-flex align-items-center justify-content-between mr-auto d-sm-block">
                <div className="service-box">
                    <div className="img-box">
                        {/* <img src="./assets/images/website/web-development.gif"  alt="" /> */}
                    </div>
                    <div className="content-heading">
                        <h2>Crafting Custom Web Apps</h2>
                        <p>I'll build you a kick-ass custom web application using Laravel that's tailored to your unique business needs! Let's rock your online presence!</p>
                        <Button>Read More</Button>
                    </div>
                </div>
                <div className="service-box">
                    <div className="img-box">
                        {/* <img src="./assets/images/website/web-development.gif"  alt="" /> */}
                    </div>
                    <div className="content-heading">
                        <h2>Building Powerful APIs with Laravel</h2>
                        <p>Hey there! I'm a Laravel PHP Developer who specializes in creating awesome APIs for your web applications - let's build something amazing together!</p>
                        <Button>Read More</Button>
                    </div>
                </div>
                <div className="service-box">
                    <div className="img-box">
                        {/* <img src="./assets/images/website/web-development.gif"  alt="" /> */}
                    </div>
                    <div className="content-heading">
                        <h2>Keep Your Website Running Smoothly</h2>
                        <p>Need help maintaining your website? I've got you covered with my expertise in Laravel PHP development and my commitment to delivering top-notch results.</p>
                        <Button>Read More</Button>
                    </div>
                </div>
                <div className="service-box">
                    <div className="img-box">
                        {/* <img src="./assets/images/website/web-development.gif"  alt="" /> */}
                    </div>
                    <div className="content-heading">
                        <h2>Experience the Unique UI/UX Design</h2>
                        <p>Welcome to a world where design meets functionality, where every click feels intuitive, and every interaction is a delight. Let's craft remarkable journeys together.</p>
                        <Button>Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services