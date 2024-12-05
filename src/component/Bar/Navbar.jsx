import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import style from "../../style/navbar.module.css"
// import Register from "../../createAccount/Register.jsx"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CreateAccount from "../../createAccount/Login.jsx"

function Navbar() {
  return (
    <div className={style.main}>
      
          <div className={style.front}>
          <h1 className= {style.todo}>Todo App</h1>
          
          <div >

            {/* <Link to="/login"><p className={style.login}>Login</p></Link> */}
            <Link to="/register"><p className={style.register}>Register</p></Link>
          </div> 
          </div>
    </div>
   
  )
}

export default Navbar