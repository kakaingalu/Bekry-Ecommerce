import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import logo from '../../Assets/logo.png'

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return(
    <>
      <img src={logo} alt="logo" className="logoPng" />
      <div className="login-wrapper">
        <h4>Welcom to Bekry</h4>
        <h4>Please login to continue</h4>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} 
            placeholder='Enter your email'/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}
            placeholder='Enter your password' />
          </label>
          <div>
          {username && password && (
            <button onClick={() => navigate('/ProductList')}>Submit</button>

          )}
            
          </div>
          
        </form>
      </div>
      <Footer />
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}