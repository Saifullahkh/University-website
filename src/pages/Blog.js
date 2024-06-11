import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'
import Blog1 from '../images/blog-page-header.jpg'
import { BlogList } from '../data/data'

function Blog() {
  return (
    <Layout>
      <Box sx={{
        backgroundImage: `url(${Blog1})`,
        backgroundSize: 'cover',
        width: '100%',
        height:'532px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        px: 10,
        '@media (max-width: 600px)': {px: 2}
      }} >
        <Typography varaint='h3' sx={{fontWeight: 'bold', fontSize: '30px', color: 'white'}}>Our Blog</Typography>
        <Typography varaint='body1' sx={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit eveniet enim velit nesciunt officia ea id. Voluptas error debitis nihil explicabo fuga! Error voluptatem esse accusamus nisi illum doloribus!</Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 2,
        my: 2
      }}>
        {
          BlogList.map((item) => {
            return (
              <>
                <Card sx={{width: '350px', backgroundColor: '#2c3e50'}}>
                  <CardMedia component='img' src={item.img} />
                  <CardContent>
                      <Typography variant='h5' gutterBottom sx={{fontWeight: 'bold',color: 'white'}}>{item.title}</Typography>
                      <Typography sx={{color: 'white'}}>{item.subtitle}</Typography>
                  </CardContent>
                </Card>
              </>
            )
          })
        }
      </Box>
    </Layout>
  )
}

export default Blog
