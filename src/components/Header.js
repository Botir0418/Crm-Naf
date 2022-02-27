import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

import "./header.styles.scss";

export default function Header() {
  return (
    <div className="bgc">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="../../img/naf.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Form className="d-flex">
              <Button variant="outline-success">Kirish</Button>
            </Form>
          </Navbar.Collapse>
          <select className="select">
            <option>Ru</option>
            <option>Uz</option>
          </select>
        </Container>
      </Navbar>
      <div className="cnt">
        <h1>
          NafCRM <br />
          Biznesni boshqarish tizimi
        </h1>
        <span>
          Yagona dasturda kompaniya ishini rejalashtirish, tashkil etish va
          nazorat qilish
        </span><br/><br/>
        <Button  variant="primary" size="lg" >
          Boshlash <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  );
}
