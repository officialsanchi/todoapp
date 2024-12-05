import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import style from "../style/events.module.css"
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";

const Events = ({button}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={style.motherDiv}> 
        <div className={style.firstDiv}>
        <div onClick={handleClose} className={style.menu}> <Link to="/createTask">Create Task</Link></div>
        <div onClick={handleClose} className={style.menu}><Link to="/allTask">All Task</Link></div>
        <div onClick={handleClose} className={style.menu}><Link to="/pendingTask">Pending Task</Link></div>
        <div onClick={handleClose} className={style.menu}><Link to="/cancelledTask">Cancelled Task</Link></div>
        <div onClick={handleClose} className={style.menu}><Link to="/completedTask">Completed Task</Link></div>
        {/* <div>
        <p>  <Link to="/events"></Link></p>
        </div> */}
        </div>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={style.button}
      >
       {button}
      </Button>
      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <MenuItem onClick={handleClose}>register</MenuItem>
        <MenuItem onClick={handleClose}>completed</MenuItem>
        <MenuItem onClick={handleClose}>not completed</MenuItem>
        <MenuItem onClick={handleClose}>update</MenuItem>
        <MenuItem onClick={handleClose}>delete</MenuItem>
        
      </Menu> */}

    </div>

    
  )
}

export default Events
