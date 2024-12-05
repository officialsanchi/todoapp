import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import style from "../style/events.module.css"
import MenuItem from '@mui/material/MenuItem';

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
    <div style={{height:"100vh"}}> 
        <div className={style.firstDiv}>
        <div onClick={handleClose} className={style.menu}>Create Task</div>
        <div onClick={handleClose} className={style.menu}>All Task</div>
        <div onClick={handleClose} className={style.menu}>Pending Task</div>
        <div onClick={handleClose} className={style.menu}>Cancelled Task</div>
        <div onClick={handleClose} className={style.menu}>Completed Task</div>
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
      <Menu
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
        
      </Menu>

    </div>

    
  )
}

export default Events
