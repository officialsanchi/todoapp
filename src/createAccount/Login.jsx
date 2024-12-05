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
      <div className={style.mainContainer}>
        <div className={style.note}>
          <p>Sign up to orgainze your day</p>

        </div>
        <div className={style.container}>
        <h2 style={{color:'black', fontFamily:"sans-serif", color:"rgb(204, 42, 42)"}}>Welcome to AyoChi</h2>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.loginInput}>
            <label className={style.label}>Email:</label>
            <input
            className={style.input}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className={style.loginInput}>
            <label className={style.label}>Password:</label>
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
        <p> create account? <Link to="/register"><button className={style.register}>Register</button></Link></p>
        </div>
      </div>
      </div>
     
    );  
}
 

export default Login;