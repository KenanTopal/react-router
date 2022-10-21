import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate();
  const location = useLocation();

 

  return (
    <>
     <Form className='mt-5 bg-light p-4 shadow'>
      <h1 className='text-dark text-center mb-3'> Sign Up </h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

    <p className='mt-5 text-center'> Sign Up <Button variant='warning' onClick={()=>navigate('./login', {state: {page: 'login'}})}>Sign-Up</Button></p>
    </> 
  )
}

export default SignUp