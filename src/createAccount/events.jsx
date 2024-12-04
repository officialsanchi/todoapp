// import React from 'react'
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// const Events = ({button}) => {

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <div> 
        

//         <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//        {button}
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//          <MenuItem onClick={handleClose}>register</MenuItem>
//         <MenuItem onClick={handleClose}>completed</MenuItem>
//         <MenuItem onClick={handleClose}>not completed</MenuItem>
//         <MenuItem onClick={handleClose}>update</MenuItem>
//         <MenuItem onClick={handleClose}>delete</MenuItem>
        
//       </Menu>

//     </div>

    
//   )
// }

// export default Events
