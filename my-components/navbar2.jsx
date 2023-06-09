import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
const iconsCall = <FontAwesomeIcon icon={faPhoneVolume} />;

function Home() {
  return (
    <Navbar bg="dark" expand="lg menu">
      <Container>
        <Navbar.Brand className=" text-white fw-semibold fs-3" href="#home">
          Jonatan G Benitez
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <ul>
            <Nav className="me-auto">
              <li>
                <Nav.Link href="#home">Home</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#link">Services</Nav.Link>
              </li>
              <li>
                {" "}
                <Nav.Link href="#link">Testimonials</Nav.Link>
              </li>
              <li>
                {" "}
                <Nav.Link href="#link">Faq</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#link">Portfolio</Nav.Link>
              </li>
              <li>
                {" "}
                <Nav.Link href="#link">Contact</Nav.Link>
              </li>

              <button type="button" className="rounded-pill btn-rounded">
                +341 123 45678
                <span>
                  <a href="/">{iconsCall}</a>
                </span>
              </button>
            </Nav>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
