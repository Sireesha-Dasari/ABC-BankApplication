import React, { useState, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Toast, Card, Carousel } from 'react-bootstrap';

import UserLogin from './UserLogin';
import AdminCheck from './AdminCheck';
import { Link } from 'react-router-dom';

function LoginType(props) {
    const [show, setShow] = useState(false);
    return (
        <div className="bg" >
            <Fragment>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home"><h1>Welcome to ABC Retail Bank Home Page</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Form inline>

                            <Row>
                                <Col xs={6}>
                                    <Button onClick={() => setShow(true)} >LOGIN</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{ marginRight: '10%', marginBottom: '10%', marginLeft: '10%' }}>
                    <Row style={{ marginLeft: '39%' }}>
                        <Col xs={6}>
                            <Toast onClose={() => setShow(false)} show={show} delay={100000} autohide>
                                <Toast.Header>

                                    <strong className="mr-auto"><b>Select how to login</b></strong>

                                </Toast.Header>
                                <Toast.Body>

                                    <Link class="btn btn-success mr-2" to='/admin'>Admin Login</Link><br /><br />
                                    <Link class="btn btn-success mr-2" to='/user'>User Login</Link>

                                </Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        </div>
    )
}

export default LoginType;