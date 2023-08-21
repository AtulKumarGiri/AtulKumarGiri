import React from 'react';

function Footer() {
  return (
    <div> 
        <footer className="footer bg-light ">
            <div className="up-foot d-md-flex justify-content-between align-items-center d-sm-block">
                <div className="logo text-center">
                    <img src="./assets/images/website/logo.png" alt="" />
                    <p>Atul Kumar Giri </p> 
                    <span> Website Developer and Competitive Coder </span>
                </div>
                <div className="copy text-center">
                    <p>&copy; 2023 | <b> Atul Kumar Giri </b>| All Rights Reserved </p>
                    <div className="design text-center">
                        <p><span> Designed & Developed by Atul Kumar Giri </span></p>
                    </div>
                </div>
                <div className="social text-center">
                    <p className='mb-1'>Connect with me at</p>
                    <ul className='d-flex align-items-center p-0 m-0'>
                        <li className='mx-1'><a href="#" className="btn btn-social-icon  btn-google"><i className="fa fa-google"></i></a></li>
                        <li className='mx-1'><a href="#" className="btn btn-social-icon  btn-github"><i className="fa fa-github"></i></a></li>
                        <li className='mx-1'><a href="#" className="btn btn-social-icon  btn-facebook"><i className="fa fa-facebook"></i></a></li>
                        <li className='mx-1'><a href="#" className="btn btn-social-icon  btn-linkedin"><i className="fa fa-linkedin"></i></a></li>
                        <li className='mx-1'><a href="#" className="btn btn-social-icon  btn-instagram"><i className="fa fa-instagram"></i></a></li>
                        <li className='mx-1'><a href="#" className="btn btn-social-icon  btn-primary"><i className="fa fa-telegram"></i></a></li>
                        <li className='mx-1'><a href="#" className="btn btn-social-icon  btn-success"><i className="fa fa-whatsapp"></i></a></li>
                    </ul>
                </div>
            </div>
            {/* <div className="down-foot text-center">
                <p> Designed & Developed by Atul Kumar Giri</p>
            </div> */}
        </footer>
    </div>
  )
}

export default Footer