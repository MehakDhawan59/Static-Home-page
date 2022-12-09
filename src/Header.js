import React from 'react';
import ReactDOM from 'react-dom/client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';
import './Header.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';



function Header() {
  return (

    <>

    
    <Box className="header " display="flex">

        <Box  display="flex" alignItems="center">
            
            <Box className="box" marginRight="1rem"></Box>
            <Box  className='item1' marginLeft="0.5rem" >Medical Darpan</Box>
        </Box> 
        <Box className='item2' display="flex" >

            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Distributers</a>
            <a href="#">Manufacturers</a>
            <a href="#">About us</a>
            <a href="#">Blog</a> 
        
        </Box>
        
        <Box className='item3' >

        <Box marginRight="1rem">Login</Box>
        <AccountCircleOutlinedIcon/>
          
          </Box>
      
    </Box>

    </>
  )
}



export default Header;