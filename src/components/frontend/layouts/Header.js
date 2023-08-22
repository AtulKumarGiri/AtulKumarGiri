import React from "react";
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


function Header() {

    const[isOpen, setIsOpen] =React.useState(false);

	return (
		<div className="container" style={{display: 'block' }}>
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



