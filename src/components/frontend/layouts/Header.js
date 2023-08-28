import { React, useState, useLayoutEffect } from "react";
import { showHireAlert } from "./Alerts";
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	Nav,
	NavbarBrand,
    Button
} from 'reactstrap';
import Cursor from "react-cursor-follow";
import { Link } from "react-router-dom";


const colors = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#008000",
    "#0000ff",
    "#4b0082",
    "#ee82ee",
  ];

function Header(props) {

    const[isOpen, setIsOpen] = useState(false); //Humburger
    const [i, setI] = useState(0); //Cursor Color


    useLayoutEffect(() => {
        setTimeout(() => {
          if (i === colors.length) setI(0);
          else setI(i + 1);
        }, 100);
      }, [i]);





	return (
		<div className="container" style={{display: 'block' }}>
            <Cursor color={"rgba(255, 0, 0, 0.6)"} duration={1} size={55} />

			<Navbar light expand="md" >
			    <NavbarBrand to="/"><img src="./assets/images/website/logo.png" alt="#logo" width={90} />  <span>Atul Kumar Giri</span></NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="me-auto mb-2 mb-lg-0" navbar>
                            <NavItem>
                                <Link to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about">About</Link>
                            </NavItem>
                            {/* <NavItem>
                                <Link to="/portfolio">Portfolio</Link>
                            </NavItem> */}
                            <NavItem>
                                <Link to="/contact">Contact</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/certification">Certification</Link>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink onClick={downloadCV} to="#">Download Resume</NavLink>
                            </NavItem> */}
					</Nav>
                    <Button onClick={showHireAlert} className="btn btn-success">Hire Me</Button>
				</Collapse >
			</Navbar>
		</div >
	);
}

export default Header;



