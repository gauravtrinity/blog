import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Collapse,
  Nav,
  Navbar as ReactstrapNavbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

import useAuth from "../hooks/useAuth";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { authed, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (authed) {
    return (
      <div>
        <ReactstrapNavbar color="dark" expand="md" dark>
          <NavbarBrand href="/">
            <img src={logo} alt="Blog Logo" width="53" height="53" />
          </NavbarBrand>
          <NavbarToggler
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav className="mr-4 " navbar>
              <NavItem>
                <NavLink href="">
                  <Link to="/" className="text-white text-decoration-none">
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <Link
                    to="/blog-list"
                    className="text-white text-decoration-none"
                  >
                    Blog List
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button onClick={() => handleLogout()}>logout</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </ReactstrapNavbar>
      </div>
    );
  }

  return (
    <ReactstrapNavbar color="dark" expand="md" dark>
      <NavbarBrand href="/">
        <img src={logo} alt="Blog Logo" width="53" height="53" />
      </NavbarBrand>
      <NavbarToggler
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Collapse isOpen={isOpen} navbar className="justify-content-end">
        <Nav navbar className="me-4">
          <NavItem>
            <NavLink href="">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">
              <Link to="/login" className="text-white text-decoration-none">
                Login
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">
              <Link to="/signup" className="text-white text-decoration-none">
                Signup
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  );
};

export default Navbar;
