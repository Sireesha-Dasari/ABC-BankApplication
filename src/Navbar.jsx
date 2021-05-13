import './App.css';
import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';

class Navbar1 extends Component {

    render() {
        return (
            <Fragment>

                <div className="App">
                    <Navbar bg="dark" variant="dark" sticky="top">
                        <Navbar.Brand href="#home">ABC Retail Banking Application </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <Link to="/admin">Admin</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/user">User</Link>
                            </Nav.Link>
                        </Nav>
                        <Nav.Link>
                            <Link to="/user">Logout</Link>
                        </Nav.Link>
                    </Navbar>
                </div>
            </Fragment>
        )
    }
}
export default Navbar1;