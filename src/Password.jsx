import React, { useState, Fragment } from 'react';
import { Form } from 'react-bootstrap';

function Password(props) {
    return (
        <Fragment>
            <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ marginRight: '270px', fontSize: '15px' }}>Password</Form.Label>
                <Form.Control type="password" placeholder="" size="sm"
                    value={props.passwordVal}
                    onChange={props.passwordChange}
                    block />
            </Form.Group>
        </Fragment>

    )
}
export default Password;