import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
const CreateTask = ()=>{
    return(
        <div>
            <div>
                <p>Title</p>
                <input 
                    type="text"
                    placeholder="Task Title"
                    required
                />
            </div>
            <div>
                <p>content</p>
                <input 
                    type="text"
                    placeholder="Content;"
                    required
                />
            </div>
        </div>
        
        
    )

//     import * as React from 'react';
// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';

// export default function SimpleBadge() {
//   return (
//     <Badge badgeContent={4} color="primary">
//       <MailIcon color="action" />
//     </Badge>
//   );
// }

    // <Box sx={{ '& > :not(style)': { m: 1 } }}>
    //   <Fab color="primary" aria-label="add">
    //     <AddIcon />
    //   </Fab>
    //   <Fab color="secondary" aria-label="edit">
    //     <EditIcon />
    //   </Fab>
    //   <Fab variant="extended">
    //     <NavigationIcon sx={{ mr: 1 }} />
    //     Navigate
    //   </Fab>
    //   <Fab disabled aria-label="like">
    //     <FavoriteIcon />
    //   </Fab>
    // </Box>
  
    
}
export default CreateTask



  
    

