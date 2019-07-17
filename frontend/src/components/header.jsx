import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./NavBar.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <h1 className="h1">Wild Circus</h1>
        <div className="navBar">
          <Navbar color="none" light expand="lg">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="m-auto linknav" navbar>
                <NavItem>
                  <NavLink href="#perf" className="mr-5">
                    <span className="underlineNav">Performances</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#about" className="mr-5">
                    <span className="underlineNav">About Us</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact" className="mr-5">
                    <span className="underlineNav">Contact</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#$" className="mr-5">
                    <span className="underlineNav">Prices</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div />
        </div>
      </div>
    );
  }
}
export default Header;
