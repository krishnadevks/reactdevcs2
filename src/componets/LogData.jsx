import { Button, TextField } from '@mui/material'
import React from 'react'

const LogData = () => {
  return (
    <div style={{paddingTop:'80px'}}>
      <TextField
          required
          id="outlined-required"
          label="Name"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
         <Button variant="outlined">Clear</Button>
      <Button variant="contained">Submit</Button>

    </div>
  )
}

export default LogData
