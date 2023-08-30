import { React, useState, useLayoutEffect } from "react";
// import { showHireAlert, downloadCV } from "./Alerts";
import {
	Navbar,
	NavItem,
    // NavLink,
	NavbarToggler,
	Collapse,
	Nav,
	NavbarBrand,
    // DropdownMenu,
    // DropdownItem,
    // DropdownToggle,
    // ButtonDropdown,
    // Button
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
    const[i, setI] = useState(0); //Cursor Color
    // const[dropdownOpen, setOpen] = useState(false); //Dropdown Open or Closed

    useLayoutEffect(() => {
        setTimeout(() => {
          if (i === colors.length) setI(0);
          else setI(i + 1);
        }, 100);
      }, [i]);


    // let myStyle = {
    //     color: props.mode === 'dark'?'white':'#101010',
    //     backgroundColor: props.mode ==='dark'?'#101010':'white'
    // }


	return (
		<div className="container" style={{display: 'block' }}>
            <Cursor color={"rgba(255, 0, 0, 0.6)"} duration={1} size={55} />

			<Navbar  className={`navbar navbar-expand-lg navbar-${props.mode}`} expand="md" >
			    <NavbarBrand to="/"><img src="./assets/images/website/logo.png" alt="#logo" width={90} />  <span>Atul Kumar Giri</span></NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar className={`bg-${props.mode}`} >
					<Nav className="me-auto mb-2 mb-lg-0" navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">About</Link>
                        </NavItem>
                        
                        <NavItem>
                            <Link to="/contact">Contact</Link>
                        </NavItem>

                        {/* <NavItem>
                            <ButtonDropdown toggle={() => { setOpen(!dropdownOpen) }} isOpen={dropdownOpen}>
                                <DropdownToggle caret>
                                    More
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <NavItem>
                                            <Link to="/achievements">Achievements</Link>
                                        </NavItem>
                                    </DropdownItem>
                                    <DropdownItem> 
                                        <NavItem>
                                            <Link to="/projects">Projects</Link>
                                        </NavItem>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavItem>
                                            <Link to="/portfolio">Portfolio</Link>
                                        </NavItem>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavItem className="text-left">
                                            <NavLink onClick={downloadCV} to="#">Download Resume</NavLink>
                                        </NavItem>
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>   
                        </NavItem>                             */}
					</Nav>
                    {/* <Button onClick={showHireAlert} className="btn btn-success">Hire Me</Button> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}  >

                        <input  onClick={props.toggleMode} className="form-check-input d-none" type="checkbox" id="flexSwitchCheckDefault" />
                        {props.mode === 'light' ? (
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                &#127769;
                            </label>
                        ) : (
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                &#9788;
                            </label>
                        )}
                    </div>
				</Collapse >
			</Navbar>
		</div >
	);
}

export default Header;



