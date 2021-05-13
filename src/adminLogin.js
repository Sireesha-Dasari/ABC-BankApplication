import React, { Fragment, Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        }
    }
    emailValueChange = (e) => {
        let updatedEmail = e.target.value;
        this.setState(
            {
                email: updatedEmail
            });
    }
    passwordValueChange = (e) => {
        let updatePassword = e.target.value;
        this.setState(
            {
                password: updatePassword
            });
    }
    onChangeSubmit = (e) => {
        this.props.history.push("/AdminDashboard");
    }
    render() {
        return (
            <Fragment>
                <div className="demo"><br></br><br></br>
                    <h1>Welcome to Admin Login Page</h1>
                    <Card >
                        <Card.Body className="demo1">
                            <Card.Title className="App">LOGIN</Card.Title>
                            <Card.Text>
                                <Form onSubmit={this.onChangeSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.emailValueChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordValueChange} /><br></br>                 </Form.Group>                  <Form.Group controlId="formBasicCheckbox">                  <Form.Check type="checkbox" label="Check me out" /><br></br>
                                    </Form.Group>
                                    <Button variant="primary" onClick={this.onChangeSubmit}>Login</Button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Fragment>
        )
    }
} export default AdminLogin;