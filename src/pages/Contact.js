import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography, TextField, Button, Container, Stack } from '@mui/material'
import Contact1 from '../images/contact-page-header.jpg'
import { Link } from "react-router-dom"

function Contact() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')
 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password) 
    }
 

  return (
    <Layout>
      <Box sx={{
        backgroundImage: `url(${Contact1})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '532px',
        px: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '@media (max-width: 600px)': {px: 2}
      }}>
        <Typography varaint='h3' sx={{fontFamily: 'cooper', fontSize: '35px', fontWeight: 'bold', color: 'white'}}>Contact</Typography>
        <Typography sx={{color: 'white'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus quibusdam suscipit pariatur accusantium? Odit quisquam, laboriosam laudantium natus earum ad animi necessitatibus possimus eveniet temporibus, explicabo id. Quam, perspiciatis?</Typography>
      </Box>

      <Box sx={{my: 5, width: '70%', mx: 'auto', '@media (max-width: 600px)': {width: '85%'} }} Offset={2} >
      <Typography varaint='h2' sx={{textAlign: 'center', fontSize: '25px', fontWeight: 'bold', backgroundColor: '#7ed6df', py: 3}}>Make in Appointment</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4, mt: 2}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    label="Date of Birth"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Typography sx={{textAlign: 'center'}}>
                   <Button variant="contained" color="error" type="submit" >Submit</Button>
                </Typography>
               
            </form>
            
      </Box>
    </Layout>
  )
}

export default Contact
