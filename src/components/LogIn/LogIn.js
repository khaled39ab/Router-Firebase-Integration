import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import './LogIn.css'
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [validated, setValidated] = useState(false);

    return (
        <div className='logIn-container p-4 m-4 w-50 mx-auto'>
            <h2 className='text-center text-info'>Please Log In</h2>
            <Form noValidate validated={validated}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <Button variant="link">Forget Password?</Button>
                <hr />
            </Form>
            <div className='create-btn-sec'>
                <Link to={'/register'}>
                    <Button>
                        Create An Account
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default LogIn;