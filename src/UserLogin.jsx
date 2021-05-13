import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Button, Card, Form, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Email from './Email';
import Password from './Password';
import { userDetails } from './actions';
import './App.css';
import { connect } from 'react-redux';


function User(props) {

    useEffect(() => {
        loadUsers();
    }, []);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [changeEmail, setChangeEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }


    const usernameinputvalchange = (e) => {

        setUsername(e.target.value);

    }
    const passwordinputvalchange = (e) => {
        setPassword(e.target.value);

    }
    const [users, setUser] = useState([]);
    const loadUsers = async () => {
        await axios.get('http://localhost:3002/users')
            .then(response => {
                setUser(response.data);
            });
    }
 
    
    const onSubmit = () => {

        const usernameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isUsernameValid = usernameRegex.test(username);
        const isPasswordValid = passwordRegex.test(password);

        if (isUsernameValid) {
            for (let i = 0; i < users.length; i++) {

                if (username == users[i].email && password == users[i].password && users[i].role == 'Admin') {
                    return props.history.push('/home');
                } else if (username == users[i].email && password == users[i].password && users[i].role == 'User') {
                    sessionStorage.setItem("user", JSON.stringify(users[i]));
                    return props.history.push('/userpage');

                } else {
                    if (i == users.length - 1) {
                        alert("User name and password not matched");
                    }
                }
            }
        }
        else {
            alert("Invalid Credentials");
        }
    }
    return (
        <Fragment>
            <div className="user">
                <Card style={{ width: '24rem' }}>
                    <Card.Body style={{ backgroundImage: `url("https://tse4.mm.bing.net/th/id/OIP.WtCqBbP6oGBb8hCqbi86WgHaEK?pid=ImgDet&rs=1")`, backgroundSize: 'cover' }}>
                        <Card.Title className=''>User Login Page</Card.Title><br />
                        
                        <Card.Text>
                            <br />
                            
                            <Form>
                           
                                    <Email emailVal={username}
                                        emailValueChange={usernameinputvalchange} />
                            
                                   <Password
                                    passwordVal={password}
                                    passwordChange={passwordinputvalchange} />

                                <Button variant="warning" size="lg" onClick={onSubmit} block>Login</Button>
                                {
                                    showAlert === true && (
                                        <Alert variant="success">Success</Alert>
                                    )}{(showAlert === false &&
                                        <Alert variant="warning">Failure</Alert>
                                    )}
                                <br />
                             
                               

                            </Form>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Fragment>

    )
}
export default User;