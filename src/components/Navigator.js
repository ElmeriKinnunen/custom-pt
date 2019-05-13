import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
class Navigator extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top" >
        <Navbar.Brand href="/">PTfitness</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/customers">Customers</Nav.Link>
                <Nav.Link href="/trainings">Trainings</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    );
  }
}

export default Navigator;
