import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './MainNavigation.css';

const mainNavigation = (props) =>{

  return (
    <Navbar expand="lg" className="MainNav">
      <Navbar.Brand onClick={props.onReturnHome} href="#home">
      <p className="navbarBrandText">Home</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={props.onMainMenuSelect.bind(this, "company")} href="#home">
          <p className="navbarItemText">Company</p>
          </Nav.Link>
          <Nav.Link onClick={props.onMainMenuSelect.bind(this, "services")} href="#link">
          <p className="navbarItemText">Services</p>
          </Nav.Link>
          <Nav.Link onClick={props.onMainMenuSelect.bind(this, "destination")} href="#link">
          <p className="navbarItemText">Destination</p>
          </Nav.Link>
          <Nav.Link onClick={props.onMainMenuSelect.bind(this, "news")} href="#link">
          <p className="navbarItemText">News</p>
          </Nav.Link>
          <Nav.Link onClick={props.onMainMenuSelect.bind(this, "gallery")} href="#link">
          <p className="navbarItemText">Gallery</p>
          </Nav.Link>
          <Nav.Link onClick={props.onMainMenuSelect.bind(this, "contact")} href="#link">
          <p className="navbarItemText">Contact</p>
          </Nav.Link>
          <Nav.Link onClick={props.onShowOverlay} href="#link">
          <p className="navbarItemText">Overlay</p>
          </Nav.Link>

          {
            // <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            //   <NavDropdown.Item value="company" href="#action/3.1" onClick={props.onMainMenuSelect.bind(this)}>Company</NavDropdown.Item>
            //   <NavDropdown.Item value="services" href="#action/3.2">Another action</NavDropdown.Item>
            //   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            //   <NavDropdown.Divider />
            //   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            // </NavDropdown>
          }

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default mainNavigation;
