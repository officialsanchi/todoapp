import React, { useState } from 'react'
import style from "../style/register.module.css"
import {Link} from "react-router-dom"


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    
    const handleSubmit = (event) => {
      event.preventDefault(); 
  
      
      if (!name || !email || !password || !confirmPassword) {
        setError('All fields are required!');
        setSuccess('');
        return;
      }
  
      if (password !== confirmPassword) {
        setError('Passwords do not match!');
        setSuccess('');
        return;
      }
  
      
      setError('');
      setSuccess('Registration successful!');
  
      
      console.log('User Registered:', { name, email, password });
    };
  
    return (
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    );
  
}

export default Register