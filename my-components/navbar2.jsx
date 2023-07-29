import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "./Button1";

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
                <Nav.Link href="#services">Services</Nav.Link>
              </li>
              <li>
                {" "}
                <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              </li>
              <li>
                {" "}
                <Nav.Link href="#faq">Faq</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              </li>
              <li>
                {" "}
                <Nav.Link href="#footer">Contact</Nav.Link>
              </li>
              <Button/>
            </Nav>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
