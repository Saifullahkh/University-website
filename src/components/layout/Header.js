import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography,Avatar } from '@mui/material'
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { FaBloggerB } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";
import InfoIcon from '@mui/icons-material/Info';
import { IoMdPersonAdd } from "react-icons/io";
import '../../App.css'
import Saif1 from '../../images/saif12.jpg'

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawer = () => {
        setMobileOpen(!mobileOpen)
    }


    const drawer = (
        <Box onClick={handleDrawer}>
            <Typography variant='h5' flexGrow='1' sx={{fontWeight: 'bold', p:2, backgroundColor: '#7ed6df',fontSize: '25px'}}>
                Hangu <span style={{color: 'red'}}>Campus</span>
            </Typography>
            <Divider/>
            <ul className="menu">
                <li>
                    <span style={{fontSize: '27px', marginRight: '8px'}}><HomeIcon/></span>
                    <NavLink activeclassName='active' to='/'>Home</NavLink>
                </li>
                <li>
                    <span style={{fontSize: '27px', marginRight: '8px',}}><InfoIcon /></span>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <span style={{fontSize: '27px', marginRight: '8px'}}><FaBookOpenReader /></span>
                    <NavLink to='/course'>Course</NavLink>
                </li>
                <li>
                    <span style={{fontSize: '27px', marginRight: '8px'}}><IoMdPersonAdd /></span>
                    <NavLink to='/addmission'>Addmission</NavLink>
                </li>
                <li>
                    <span style={{fontSize: '27px', marginRight: '8px'}}><FaBloggerB /></span>
                    <NavLink to='/blog'>Blog</NavLink>
                </li>
                <li>
                    <span style={{fontSize: '27px', marginRight: '8px'}}><MdContactPage /></span>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </Box>
    )

  return (
    <>
     <Box>
        <AppBar sx={{backgroundColor: '#7ed6df'}}>
            <Toolbar>
            <IconButton
                color= 'inherit'
                edge= 'start'
                onClick={handleDrawer}
                // sx={{display: {xs: 'block' , sm: 'none'}}}
            >
                <MenuIcon />
            </IconButton>
                <Typography variant='h5' flexGrow='1' sx={{fontWeight: 'bold'}}>
                    Hangu <span style={{color: 'red'}}>Campus</span>
                </Typography>
                <Typography >
                    {/* <AccountCircleIcon sx={{fontSize: '30px'}}/> */}
                    <Avatar alt="Remy Sharp" src={Saif1} />
                </Typography>
            </Toolbar>
        </AppBar>
        <Box>
            <Drawer 
              open={mobileOpen}
              onClose={handleDrawer}
            >
                {drawer}
            </Drawer>
        </Box>
        <Toolbar />
     </Box> 


    </>
  )
}

export default Header
