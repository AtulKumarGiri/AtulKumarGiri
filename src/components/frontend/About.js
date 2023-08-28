import React from 'react';
import { showHireAlert } from './layouts/Alerts';

import { Button } from 'reactstrap';

function About() {
  return (
    <div className="container about-container d-flex align-items-center justify-content-center">
        <div className="aboutContainer text-center">
            <div className="heading">
                <h1>About Me</h1>
                <span></span>
            </div>
            <div className="container d-md-flex align-items-center justify-content-between d-sm-block ">
            <div className="info">
                <div className="content-heading ">
                    <h2>Creating Awesome Websites and Apps!</h2>
                    <span></span>
                </div>
                <div className="content">
                    <p className='my-4 mb-5'>Hey there! I’m a kick-ass Laravel PHP Developer with a ton of experience under my belt. I’ve built all sorts of awesome web applications and websites for clients from different industries. If you want to see what I can do, just check out my portfolio. I pride myself on delivering top-notch projects that really hit the mark for my clients.</p>

                    <Button onClick={showHireAlert}>See More</Button>
                </div>
            </div>
            <div className="image">
                <img src="./assets/images/website/about.gif" alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default About