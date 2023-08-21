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
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="container" style={{
			display: 'block'
		}}>
			{/* <h5>ReactJS Reactstrap Navbar Component</h5> */}
			<Navbar light expand="md">
				<NavbarBrand href="/"><img src="./assets/images/website/logo.png" alt="#logo" width={90} />  <span>Atul Kumar Giri</span></NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar className="justify-content-end">
					<Nav className="mr-auto" navbar>
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
					</Nav>
				</Collapse >
                <Collapse isOpen={isOpen} navbar className="justify-content-end">
                    <Nav navbar>
						<NavItem>
                            <Button>Hire Me</Button>
						</NavItem>
                    </Nav>
                </Collapse>
			</Navbar>
		</div >
	);
}

export default Header;



