import React, { Fragment, useState, useEffect, cloneElement } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem, Row, Col, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Users = (props) => {
    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        aadhar: ' ',
        pan: '',
        balance: ' ',
        cType: ' ',
        sType: ' ',
        currentbalance: '0',
        account: ''

    });
    const [showButton, setShowBotton] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(res.data);
    }
    const userButton = () => {
        props.history.push('/addamount');
    }
    const currentAddAmount = () => {
        props.history.push('/currentadd');
    }
    const userButton1 = () => {
        props.history.push('/subamount');
    }
    const currentWithAmount = () => {
        props.history.push('/currentsub');
    }
    const currentButton = () => {
        setShowBotton(!true);
    }
    const savingsButton = () => {
        setShowBotton(true);
    }
    return (
        <center>
         <div className="userpage">
                <h3 > User name :{user.name}</h3>
                <h3 > Account No :{user.account}</h3>
                <CardColumns>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.C1N6ZnCRHeVbFionLtS1OgHaEE?pid=ImgDet&rs=1" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '90px' }} ><Button variant="primary" size="sm" onClick={currentButton} block>Current</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card >
                    <Card style={{ width: '10rem' }} className="">
                        <Card.Img variant="top" src="data:image/jpeg;base64,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" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '90px' }} ><Button variant="primary" size="sm" onClick={savingsButton} block>Savings</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card>
                </CardColumns>
                <div className='demo' style={{ width: '40rem', marginLeft: "40px" }}>
                    {
                        showButton === true && (
                            <div>
                                <hr />
                                <button class="btn btn-info" onClick={userButton}>Add Amount</button><br /><br />
                                <button class="btn btn-info" onClick={userButton1}>Withdraw Amount</button>
                                <br /><br />
                                <ListGroup>
                                    <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                    <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                    <ListGroup.Item>Account No : {user.account}</ListGroup.Item>
                                    <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                    <ListGroup.Item>Balance : {user.balance}</ListGroup.Item>
                                    <ListGroup.Item>Account Type : {user.sType}</ListGroup.Item>

                                    <br />

                                </ListGroup>
                            </div>
                        )}{(showButton === false &&
                            <div>
                                <hr />
                                <button class="btn btn-info" onClick={currentAddAmount}>Add Amount</button><br /><br />
                                <button class="btn btn-info" onClick={currentWithAmount}>Withdraw Amount</button>
                                <br /><br />
                                <ListGroup>

                                    <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                    <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                    <ListGroup.Item>Account No : {user.account}</ListGroup.Item>
                                    <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                    <ListGroup.Item>Balance : {user.currentbalance}</ListGroup.Item>
                                    <ListGroup.Item>Account Type : {user.cType}</ListGroup.Item>

                                    <br />

                                </ListGroup>
                            </div>
                        )}
                </div>


            </div><br />


        </center>

    )

}
export default Users;