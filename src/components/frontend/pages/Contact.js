import React from "react";
import { showSuccessAlert } from '../layouts/Alerts';
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
function ContactPage() {
  return (
    <div className="container contact-page-container d-flex align-items-center justify-content-center">
      <div className="contactPageContainer text-center">
        <div className="heading">
          <h1>Contact</h1>
          <span></span>
        </div>
        <div className="container contact-options d-md-flex align-items-center justify-content-between d-sm-block">
          <div className="call py-3">
            <div className="heading">
              <h2>
                <i className="fa fa-phone"></i>
                <br /> Call Me
              </h2>
              <span></span>
              <Link to={"tel:+918481823182"}>
                <h2 className="my-3">+91 8481823182</h2>
              </Link>
            </div>
          </div>
          <div className="email py-3">
            <div className="heading">
              {/* <div className="content-heading"> */}
              <h2>
                <i className="fa fa-envelope"></i> <br /> Mail Me
              </h2>
              <span></span>
              <Link to={"mailto:atulgiri21dec@gmail.com"}>
                <h2 className="my-3">atulgiri21dec@gmail.com</h2>
              </Link>
              {/* </div> */}
            </div>
          </div>
          <div className="address py-3">
            <div className="heading">
              <h2>
                {" "}
                <i className="fa fa-home"></i> <br /> My Address
              </h2>
              <span></span>
              <h1 className="my-3">
                Kankinara, 24 PGS (N), West Bengal, India
              </h1>
            </div>
          </div>
        </div>
        <div className="container contactForm d-md-flex align-items-start justify-content-start d-sm-block mt-5">
          <div className="contact-form info my-5 p-md-5">
            <div className="content-heading px-5">
              <h2>Get In Touch</h2>
              <span></span>
            </div>
            <div className="content px-5">
              <Form className="my-5">
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Full Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter Phone Number"
                  />
                </FormGroup>
                <FormGroup>
                  <Input type="textarea" name="message" placeholder="Enter Message" />
                </FormGroup>

                <Button onClick={showSuccessAlert} >Send Message</Button>
              </Form>
            </div>
          </div>
          <div className="image p-5">
            <div className="info">
              <div className="content-heading ">
                <h2>Message Me</h2>
                <span></span>
              </div>
              <p>
                Please feel free to call or email us, or use our contact form to
                get in touch with us.
              </p>

              <div className="social-links">
                <p>We look forward to hearing from you!</p>
                <div className="social d-flex align-items-center justify-content-center my-3">
                  <ul className='d-flex p-0 m-0'>
                      <li className='mx-1'><a href="mailto:atulgiri21dec@gmail.com" target="_blank" rel="noreferrer" className="btn btn-social-icon  btn-google"><i className="fa fa-google"></i></a></li>
                      <li className='mx-1'><a href="https://github.com/AtulKumarGiri" target="_blank" rel="noreferrer" className="btn btn-social-icon  btn-github"><i className="fa fa-github"></i></a></li>
                      <li className='mx-1'><a href="https://www.facebook.com/profile.php?id=100057191202899" target="_blank" rel="noreferrer" className="btn btn-social-icon  btn-facebook"><i className="fa fa-facebook"></i></a></li>
                      <li className='mx-1'><a href="https://www.linkedin.com/in/atul-kumar-giri-778665183/" target="_blank" rel="noreferrer" className="btn btn-social-icon  btn-linkedin"><i className="fa fa-linkedin"></i></a></li>
                      <li className='mx-1'><a href="https://www.instagram.com/atul.kumar_giri/" target="_blank" rel="noreferrer" className="btn btn-social-icon  btn-instagram"><i className="fa fa-instagram"></i></a></li>
                      <li className='mx-1'><a href="https://telegram.me/AtulKumarGiri" target="_blank" rel="noreferrer" className="btn btn-social-icon  btn-primary"><i className="fa fa-telegram"></i></a></li>
                      <li className='mx-1'><a href="https://wa.me/+918481823182" target="_blank" rel="noreferrer" className="btn btn-social-icon  btn-success"><i className="fa fa-whatsapp"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Message Box will be here  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
