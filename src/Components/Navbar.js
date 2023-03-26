import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Assets/logo.svg";
import { LinkContainer } from "react-router-bootstrap";
export default function CustomNavbar() {
  const [activeLink, setActiveLink] = useState(true);
  return (
    <Navbar className="pure-dark" variant="dark" expand="lg">
      <Container className="navbar-width">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            className="navbar-brand fixed-logo"
            alt="Website Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to={"/home"}>
              <Nav.Link className={`nav-link-contact`} href="home">
                <span>Home</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/Services"}>
              <Nav.Link
                className="nav-link-contact"
                href="services"
                onClick={() => {
                  setActiveLink(false);
                }}
              >
                <span>Services</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/Portifolio"}>
              <Nav.Link
                className="nav-link-contact"
                href="portfolio"
                onClick={() => {
                  setActiveLink(false);
                }}
              >
                <span>Portfolio</span>
              </Nav.Link>
            </LinkContainer>
            <Nav.Link
              className="nav-link-contact"
              href="#contact"
              onClick={() => {
                setActiveLink(false);
              }}
            >
              <span>Contact</span>
            </Nav.Link>
            <Nav.Link
              className="dropdown-icon d-lg-none d-md-none"
              href="#dropdown"
            ></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
