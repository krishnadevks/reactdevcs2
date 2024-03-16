import { Button, TextField } from '@mui/material'
import React from 'react'

const SignData = () => {
  return (
    <div style={{paddingTop:'80px'}}>
       <TextField
          required
          id="outlined-required"
          label="First Name"
        />
         <TextField
          required
          id="outlined-required"
          label="Last Name"
        />
         <TextField
          id="outlined-number"
          label="Number"
          type="number"
          
        />
      <Button variant="outlined"><Link to={'/'} style={{textDecoration:"none",color:"white"}}>Clera</Link></Button>
      <Button variant="contained">Submit</Button>

    </div>
  )
}

export default SignData



















