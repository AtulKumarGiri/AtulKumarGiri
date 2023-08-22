import { React, useState, useLayoutEffect } from "react";
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand,
    Button
} from 'reactstrap';
import Cursor from "react-cursor-follow";


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
			    <NavbarBrand href="/"><img src="./assets/images/website/logo.png" alt="#logo" width={90} />  <span>Atul Kumar Giri</span></NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="me-auto mb-2 mb-lg-0" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Download Resume</NavLink>
                            </NavItem>
					</Nav>
                    <Button className="btn btn-success">Hire Me</Button>
				</Collapse >
			</Navbar>
		</div >
	);
}

export default Header;



