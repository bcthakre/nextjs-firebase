import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const router = useRouter();

  const { user, login } = useAuth();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className='text-center my-3'>Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({
                ...data.email,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type='email'
            placeholder='Enter Email'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type='password'
            placeholder='Password'
          ></Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;