import React, { Fragment, useState, useEffect } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const UserView = (props) => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        pan: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(res.data);
    }

    return (
        <Fragment>

            <Card style={{ width: '24rem' }}>
                <Card.Body>

                    <Card.Text>
                        <Card.Title className='demo'>View Details</Card.Title><br />
                        <ListGroup>

                            <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                            <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                            <ListGroup.Item>Phone No: {user.phone}</ListGroup.Item>
                            <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>.
                          <br />
                            <Link className="btn btn-info" to="/home">Back to Home</Link>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    )

}
export default UserView;