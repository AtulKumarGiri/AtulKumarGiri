import React from 'react';

function Footer() {
  return (
    <div> 
        <footer className="footer bg-light ">
            <div className="up-foot d-md-flex justify-content-between align-items-center d-sm-block">
                <div className="logo text-center d-md-flex align-items-center d-sm-none">
                    <img src="./assets/images/website/logo.png" alt="" />
                    <div className="title">
                        <p>Atul Kumar Giri </p> 
                        <span> Website Developer and Competitive Coder </span>
                    </div>
                </div>

                <div className="copy text-center">
                    <p>&copy; Copyright 2023 | Atul Kumar Giri </p>
                    <div className="design text-center">
                        <p><span> Designed & Developed by Atul Kumar Giri </span></p>
                    </div>
                </div>
                <div className="social text-center">
                    <p className='mb-1'>Connect with me at</p>
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
            
        </footer>
    </div>
  )
}

export default Footer