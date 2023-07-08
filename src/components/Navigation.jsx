import { AppBar, Button,Toolbar, Typography } from '@mui/material'
import Face2SharpIcon from '@mui/icons-material/Face2Sharp';


import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
       
       <AppBar  position="static">
            <Toolbar>
              
               
                    <Face2SharpIcon sx={{ fontSize: 40}} />
                    <Typography>Employee App</Typography>
                <Button sx={{ml:4}}>
                    <Link to={"/"}  style={{color:'white',textDecoration:"none"}}>Home</Link>
                </Button>
                <Button>
                    <Link to={"/employee"}  style={{color:'white',textDecoration:"none"}}>Employee</Link>
                </Button>
                
               
            </Toolbar>
        </AppBar>
    
      
    </div>
  )
}

export default Navigation