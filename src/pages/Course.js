import React from 'react'
import Layout from '../components/layout/Layout'
import { Box,Button, Typography, Card, CardMedia, CardContent, Accordion, AccordionSummary,AccordionDetails,AccordionActions } from '@mui/material'
import Course1 from '../images/courses-page-header.jpg'
import { CourseList } from '../data/data'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Course() {
  return (
    <Layout>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: `url(${Course1})`,
        backgroundSize: 'cover', 
        width: '100%', 
        height: '532px', 
        px: 5
        }}>
        <Typography variant='h4' sx={{fontFamily: 'cooper', fontWeight: 'bold', color: 'white'}}>Our Courses</Typography>
        <Typography sx={{ color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum harum libero eligendi ratione consequatur est delectus expedita eos quos deleniti. Atque omnis molestias sed qui quam saepe consectetur esse. Aperiam!</Typography>
      </Box>

      <Box  sx={{
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: 3, 
        my: 3
        }}>
        
        {
          CourseList.map((item) => {
            return (
              <>
                <Card sx={{width: '350px'}}>
                  <CardMedia component={'img'} src={item.images}></CardMedia>
                  <CardContent>
                      <Typography variant='h5' gutterBottom>{item.title}</Typography>
                      <Typography variant='subtitle'>{item.subtitle}</Typography>
                  </CardContent>
                </Card>
              </>
            )
          })
        }
      </Box>

      <Box sx={{backgroundColor: '#2c3e50',p: 5, '@media (max-width: 600px)': {p: 2} }}>
        <Typography varaint='h3' sx={{fontWeight: 'bold', p: 3, textAlign: 'center', color: 'white', fontSize: '27px', '@media (max-width: 600px)': {fontSize: '20px'}}}>Frequently Asked Question</Typography>
        <Typography varaint='body1' sx={{color: 'white', textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis corrupti aperiam tenetur doloremque ipsum. Iste eius officiis ipsum pariatur officia alias sunt nesciunt fugit, ea reiciendis laudantium totam laboriosam dolores optio tenetur enim, est repudiandae perferendis dolor nam cumque rem nobis accusantium iusto. Quos similique explicabo maxime architecto perferendis asperiores?</Typography>
        <Box sx={{my: 2}}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
         
        </Box>
      </Box>
      
    </Layout>
  )
}

export default Course
