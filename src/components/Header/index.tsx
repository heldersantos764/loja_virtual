import { FC } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <Navbar expand="lg" className="bg-primary navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#">Budega</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link">Início</Link>
            <Link to="/eletronics" className="nav-link">Eletrônicos</Link>
            <Link to="/jewelery" className="nav-link">Jóias</Link>
            <Link to="/men's clothing" className="nav-link">Roupas Masculinas</Link>
            <Link to="/women's clothing" className="nav-link">Roupas Femininas</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
