import { Box, Button, Grid, Typography,Divider } from '@mui/material'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


function Footer() {
  return (
    <div>
      <Box sx={{backgroundColor: '#7ed6df', py: 3, px: 5}}>
        <Grid container Spacing={2}>
            <Grid item xs={12} sm={6} lg={6}>
                <Typography>
                  <Button variant='outlined' color='error'>Get in Touch</Button>
                </Typography>
                <Typography sx={{fontSize: '30px', color: 'red',mt: 1, gap: 1}}>
                    <span><FaFacebook /></span>
                    <span style={{marginLeft: '45px'}}><IoLogoTiktok /></span>
                    <span style={{marginLeft: '45px'}}><FaInstagram /></span>
                    <span style={{marginLeft: '45px'}}><FaYoutube /></span>
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} lg={6}>
                <Box sx={{'@media (max-width: 600px)': {mt: 2}}}>
                   <Typography >
                    <span  style={{color: 'red', fontSize: '22px'}}><FaAddressCard /></span> Hangu kpk
                   </Typography>
                   <Typography sx={{my: 1}}>
                    <span style={{color: 'red',fontSize: '22px'}}><FaPhone /></span> +923359199919
                   </Typography>
                   <Typography>
                    <span style={{color: 'red',fontSize: '22px'}} ><MdEmail /></span> atifullahkhan47@gmail.com
                   </Typography>
                </Box>
            </Grid>
        </Grid>
        <Divider />
        <Typography sx={{textAlign: 'center', pt: 2}}>All Right Reserved &copy; Saif Ullah Khan</Typography>
      </Box>
    </div>
  )
}

export default Footer
