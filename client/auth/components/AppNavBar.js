import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const authLinks = (
    <Fragment>
      <NavItem>
        <Link to="/dashboard">
          <span>
            <strong>User Name</strong>
          </span>
        </Link>
      </NavItem>
      <NavItem>Logout</NavItem>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <NavItem>Register</NavItem>
      <NavItem>Login</NavItem>
    </Fragment>
  );
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto">
              <NavItem>
                <Link to="/dashboard">
                  <span>
                    <strong>User Name</strong>
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Logout />
              </NavItem>
              <NavItem>
                <RegisterModal />
              </NavItem>
              <NavItem>
                <LoginModal />
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default AppNavBar;
