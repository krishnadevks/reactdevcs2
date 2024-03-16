import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography>G App</Typography>
            <Button variant='contained' color='success'>
                    <Link to={'/'} style={{textDecoration:"none",color:"white"}}>SinginData</Link>
                    </Button>       
                <Button variant='contained' color='error'>
                <Link to={'/add'} style={{textDecoration:"none",color:"white"}}>LoginData</Link>
                </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
