import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'

function Header() {
  return (
    <Navbar sticky="top" expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/">
          <img
            src=".\src\assets\amigoslogo.png"
            className="img-fluid p-2"
            alt=""
            width="150px"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/locations">Locations</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link href="/order">Order</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    // Navbar ^
    //thank you for telling me
  );
}

export default Header;
