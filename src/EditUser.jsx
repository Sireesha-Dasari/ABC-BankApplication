import React, { Fragment, useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        pan: ""
    });

    const { name, username, email, phone, pan } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`, user);
        history.push('/AdminDashboard');
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
    }

    return (
        <Fragment>
            <div className='edituser'>
                <Card style={{ width: '22rem' }}>
                    <Card.Body style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7C7nF7qzDqlU_kAykRg3KkiNYNgXnPVOQAQ&usqp=CAU")`, backgroundSize: 'cover' }}>
                        <Card.Title className='demo'>Edit User Details</Card.Title>
                        <Card.Text>
                            <Form onSubmit={e => onSubmit(e)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Name" size="sm" name="name" value={name}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>UserName</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your User Name" size="sm" name="username" value={username}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your E-mail Address" size="sm" name="email" value={email}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>Mobile</Form.Label>
                                    <Form.Control type="mobile" placeholder="Enter your Phone Number" size="sm" name="phone" value={phone}
                                        onChange={e => onInputChange(e)} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>PanNo</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Pan Number" size="sm" name="pan" value={pan}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                <button className="btn btn-warning btn-block">Updating  user details</button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Fragment>
    )
}
export default EditUser;