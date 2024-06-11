import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import Layout from '../components/layout/Layout'
import Home1 from '../images/blog1-img.jpg'

function Home() {
  return (
    <Layout>
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column' ,
        background: `url(${Home1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        width: '100%', 
        height: '532px', 
        px: 5,
        '@media (max-width: 600px)': {px: 2}
        }}>
         <Typography variant='h5' sx={{color: 'white'}}>Welcome to</Typography>
         <Typography variant='h5' gutterBottom sx={{color: 'white', fontFamily: 'cooper', fontSize: '30px', fontWeight: 'bold', '@media (max-width: 600px)': {fontSize: '21px'} }}>University of Hangu Campus</Typography>
         <Typography sx={{fontWeight: 'bolder', color: 'white',textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos ipsam minus ad harum quisquam qui voluptas magni. Maiores ut voluptas et ratione in? Molestiae veniam debitis quas hic saepe!</Typography>
         <Typography sx={{columnGap: '5px', rowGap: '5px', mt: 2}}>
            <Button variant='contained' >Our Courses</Button>
            <Button variant='outlined' sx={{color: 'white', ml: 2, '@media (max-width: 600px)': {ml: 1}}}>Contact Us</Button>
         </Typography>
      </Box>
    </Layout>
  )
}

export default Home
