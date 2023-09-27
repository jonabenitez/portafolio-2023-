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
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <ul>
            <Nav>
              <li>
                <Nav.Link href="#home">Inicio</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#tecnologies">Tecnologías</Nav.Link>
              </li>

              <li>
                {" "}
                <Nav.Link href="#aboutMe">Sobre mi</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              </li>
              <li>
                {" "}
                <Nav.Link href="#testimonials">Testimonios</Nav.Link>
              </li>
              <li>
                {" "}
                <Nav.Link href="#contact">Contacto</Nav.Link>
              </li>
              <Button />
            </Nav>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
