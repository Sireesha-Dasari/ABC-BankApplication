import React,  {useState, Fragment } from 'react';
import {Form} from 'react-bootstrap';

function Email(props) {
    return (
        <Fragment>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label  style={{ marginRight: '300px', fontSize: '15px' }}>Email</Form.Label>
                    <Form.Control type="email" placeholder="" size="sm"
                    value={props.emailVal}
                    onChange={props.emailValueChange} block/>
                </Form.Group>

            </Fragment>

    )
}
export default Email;