import React from 'react'
import Layout from '../components/layout/Layout'
import {Box, Typography,Card, CardMedia,CardContent,Grid, Button} from '@mui/material'
import {AboutList, ImgList} from '../data/data'
import About1 from '../images/about3.jpg'
import About2 from '../images/person2.jpg'

function About() {
  return (
    <Layout>
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: `url(${About1})`,
        backgroundSize: 'cover', 
        width: '100%', 
        height: '532px', 
        px: 5,
        '@media (max-width: 600px)': {px: 2}
        }}>
          <Typography variant='h4' sx={{fontWeight: 'bold', fontFamily: 'cooper', color: 'white'}}>About Us</Typography>
          <Typography sx={{textAlign: 'center', color: 'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus expedita ducimus magnam corporis nam cupiditate fugit doloremque a illum quibusdam! Temporibus dolor similique blanditiis libero voluptate quaerat facere possimus enim!</Typography>
      </Box>

      <Box>
        <Grid container sx={{my: 3}}>
           <Grid item xs={12} md={6} lg={6} sx={{my: 4,px: 3}}>
              <Typography variant='h4' gutterBottom sx={{fontWeight: 'bold'}}>Study with us</Typography>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos quis ab. At eaque nam quam excepturi harum qui rem sit modi consequatur repellat dolore rerum, odit saepe ducimus deleniti et accusantium enim perspiciatis adipisci iure placeat. Dicta autem deleniti placeat illum veritatis esse, porro beatae fugit perspiciatis, fugiat sapiente.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos quis ab. At eaque nam quam excepturi harum qui rem sit modi consequatur repellat dolore rerum, odit saepe ducimus deleniti et accusantium enim perspiciatis adipisci iure placeat. Dicta autem deleniti placeat illum veritatis esse, porro beatae fugit perspiciatis, fugiat sapiente.</p>
              
              <Typography>
                <Button variant='contained' color='error'>Contact Us</Button>
              </Typography>
           </Grid>
           <Grid item xs={12} md={6} lg={6}>
               <Typography sx={{ml: 2}}>
                <img src={About2} alt="" height='500px'  />
               </Typography>
           </Grid>
        </Grid>
      </Box>


      <Box sx={{backgroundColor: '#2c3e50', py: 3}}>
         <Typography variant='h4' sx={{color: 'white',textAlign: 'center', my: 3, fontWeight: 'bold'}}>
            Why Choose Hangu University
         </Typography>
         <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap',columnGap: '20px',rowGap: '10px'}}>
            {
              AboutList.map((item) => {
                return (
                  <>
                   <Card sx={{width: '350px'}}>
                    <Typography  sx={{ textAlign: 'center', color: 'red', fontSize:'30px'}}>
                    {item.icon}
                    </Typography>
                    
                    <CardContent>
                      <Typography variant= 'h6' gutterBottom sx={{fontWeight: 'bold'}}>{item.title}</Typography>
                      <Typography variant='body1' sx={{textAlign: 'justify'}}>{item.subtitle}</Typography>
                    </CardContent>
                   </Card>
                  </>
                )
              })
            }
         </Box>
      </Box>
      

      <Typography variant='h3' sx={{textAlign: 'center',fontWeight: 'bold', mt: 3}}>Our Winners</Typography>
      <Box sx={{display: 'flex',justifyContent: 'center', flexWrap: 'wrap', my: 3, gap: 3}}>
      
        {
          ImgList.map((item) => {
            return (
              <>
                <Card sx={{width: '350px', height: '400px'}}>
                  <CardMedia component='img' src={item.img} />
                </Card>
              </>
            )
          })
        }
      </Box>
    </Layout>
  )
}

export default About
