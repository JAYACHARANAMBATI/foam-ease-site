import { Link } from "react-router-dom";
import {
  Navbar as BSNavbar,
  Container,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap";
import CartIcon from "./CartIcon";

function Navbar() {
  return (
    <BSNavbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <BSNavbar.Brand href="/">
          <Image
            src="/WhatsApp Image 2025-04-08 at 17.31.59_d4eac1b3.jpg"
            alt="FoamEase Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          FoamEase
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/features">
              Features
            </Nav.Link>
          </Nav>
          <CartIcon />
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
