import React , { useState } from 'react'
import style from "../style/login.module.css"
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    
    const handleSubmit = (event) => {
      event.preventDefault(); 
  
      
      if (email === '' || password === '') {
        setError('Both fields are required!');
      } else {
        setError('');
        console.log('Logged in with', email, password);
        
      }
    };
  
    return (
      <div className={style.container}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
            className={style.input}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              className={style.input}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button className={style.submit} type="submit">Submit</button>
        </form>

        <div>
        <p> create account? <Link to="/register"><button>Register</button></Link></p>
        </div>
      </div>
     
    );  
}
 

export default Login;