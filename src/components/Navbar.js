import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavbar(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-fixed"
      style={{
        fontSize: "1.3rem",
        position: "fixed",
        background: "transparent",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container>
        <Link
          onClick={() => props.homeClick()}
          style={{ textDecoration: "none" }}
        >
          <Navbar.Brand
            style={{ fontSize: "1.5rem", color: "#c770f0", fontWeight: "600" }}
          >
            Aetesh
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"></Nav>
          <Nav className="gap-5">
            <Nav.Link
              onClick={() => props.homeClick()}
              style={{ color: "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => props.aboutClick()}
              style={{ color: "white" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => props.projectClick()}
              style={{ color: "white" }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => props.contactClick()}
              style={{ color: "white" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
