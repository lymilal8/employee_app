import { Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Employee = () => {
  return (
    <div>
       <Container maxWidth="md">
          <br/>
          <br/>
          <Typography variant='h4'>Employee Registration</Typography>
          <br>
          </br>
        <TextField variant='outlined' label='Name' name='username'/>
        <br /><br />
        <TextField variant='outlined' label='Designation' name='email'/>
        <br /><br />
        <TextField variant='outlined' label='Location' name='pass' />
        <br /><br />
        <TextField variant='outlined' label='Salary' name='email'/>
        <br /><br /><br />
        <Button variant='contained'>Regiter</Button>
        </Container>
    </div>
  )
}

export default Employee