import React, { Fragment, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        pan: "",
        account: ""

    });

    const { name, username, email, phone, pan, account } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3002/users", user);
        history.push('/AdminDashboard');
    };
    return (
        <Fragment>
            <div className='adduser'>
                <Card style={{ width: '24rem' }}>
                    <Card.Body style={{ backgroundImage: `("https://th.bing.com/th/id/Rfcd144812d95cade215f7241ae8326cc?rik=4ZlOsi7eOtrslQ&riu=http%3a%2f%2fimages.designtrends.com%2fwp-content%2fuploads%2f2015%2f11%2f17061911%2fSimple-Plain-Background1.jpg&ehk=m%2bfHGZImAIbAdixC35T9L8VhsjJ72WzC0fxj1V9xMoc%3d&risl=&pid=ImgRaw")`, backgroundSize: 'cover' }}>
                        <Card.Title className='demo'>Add User with Details</Card.Title>
                        <Card.Text >
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
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>MobileNo</Form.Label>
                                    <Form.Control type="mobile" placeholder="Enter your Phone Number" size="sm" name="phone" value={phone}
                                        onChange={e => onInputChange(e)} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>PanNo</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Pan Number" size="sm" name="pan" value={pan}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ marginRight: '300px', fontSize: '15px' }}>AccountNo</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Account Number" size="sm" name="account" value={account}
                                        onChange={e => onInputChange(e)} />

                                </Form.Group>
                                <button className="btn btn-primary btn-block">Add User</button>

                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Fragment>
    )
}
export default AddUser;