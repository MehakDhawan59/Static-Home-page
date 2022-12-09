import React from 'react';
import ReactDOM from 'react-dom/client';
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

import {
    CircularProgress,
    Grid,
    InputAdornment,
    TextField,
  } from "@mui/material";
  import { Search, SentimentDissatisfied } from "@mui/icons-material";
import './Header.css';
import Header from './Header';
import './Display.css'
import Suggestion from './Suggestion';
import ProductCard from './ProductCard';
const object =[
    {
        name:"Favipiravir 400mg (Fabiflu) Tablets",
        image:"fabifluimage.webp",
        price:"Rs.1,775",
        companyname:"Glenmark Pharmaceutical company",
        address:"PARVAT PATIYA SURAT, GUJARAT",
        id:'1'
    },
    {
        name:"Favipiravir 400mg (Fabiflu) Tablets",
        image:"fabifluimage.webp",
        price:"Rs.1,775",
        companyname:"Glenmark Pharmaceutical company",
        address:"PARVAT PATIYA SURAT, GUJARAT",
        id:'2'
    },
    {
        name:"Favipiravir 400mg (Fabiflu) Tablets",
        image:"fabifluimage.webp",
        price:"Rs.1,775",
        companyname:"Glenmark Pharmaceutical company",
        address:"PARVAT PATIYA SURAT, GUJARAT",
        id:'3'
    },
    {
        name:"Favipiravir 400mg (Fabiflu) Tablets",
        image:"fabifluimage.webp",
        price:"Rs.1,775",
        companyname:"Glenmark Pharmaceutical company",
        address:"PARVAT PATIYA SURAT, GUJARAT",
        id:'4'
    },
    {
        name:"Favipiravir 400mg (Fabiflu) Tablets",
        image:"fabifluimage.webp",
        price:"Rs.1,775",
        companyname:"Glenmark Pharmaceutical company",
        address:"PARVAT PATIYA SURAT, GUJARAT",
        id:'5'
    },{
        name:"Favipiravir 400mg (Fabiflu) Tablets",
        image:"fabifluimage.webp",
        price:"Rs.1,775",
        companyname:"Glenmark Pharmaceutical company",
        address:"PARVAT PATIYA SURAT, GUJARAT",
        id:'6'
    },{
        name:"Favipiravir 400mg (Fabiflu) Tablets",
        image:"fabifluimage.webp",
        price:"Rs.1,775",
        companyname:"Glenmark Pharmaceutical company",
        address:"PARVAT PATIYA SURAT, GUJARAT",
        id:'7'
    },
    {
        name:"Favipiravir 400mg (Fabiflu) Tablets",
        image:"fabifluimage.webp",
        price:"Rs.1,775",
        companyname:"Glenmark Pharmaceutical company",
        address:"PARVAT PATIYA SURAT, GUJARAT",
        id:'8'
    }]

function Display(){


    return(
        <>
        <Header/>
        <Box className="text-body">

            <Box fontSize="12px">
                Medical darpan {'>'} Search {'>'} Fabiflu tablet
            </Box>
            <TextField
                className="search-desktop"
                size="small"
                InputProps={{
                    style: {
                        paddingRight: 0
                      },
                className: 'search',
                startAdornment: (
                    <InputAdornment position="start" >
                    <Search style={{ color: '#232625' }}/>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end" >
                    <Button variant="contained" 
                    style={{ backgroundColor: '#37b090' }} >
                        Search
                    </Button>
                    </InputAdornment>
                ), 
                } }
                placeholder="Paracetemol"
                name="search"
                />

                <Box display ="flex" alignItems="center">

                    <Box margin="5px">
                    Paracetemol
                    </Box > 
                    
                    <Box margin="5px" fontSize="12px">{'(128 products)'}
                    </Box>
                    <Box display="flex" alignItems="center" margin="5px" className="op1" >
                        <Box marginRight="2px">Acedofenac</Box>
                        <Box>
                        <Button style={{ color: '#ffffff', justifyContent:'flex-start', fontSize:'12px'}}
                        size={"small"} sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center" margin="5px" className="op1" >
                        <Box marginRight="2px">500mg</Box>
                        <Box>
                        <Button style={{ color: '#ffffff', justifyContent:'flex-start', fontSize:'12px'}} size={"small"} 
                        sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
                        </Box>
                    </Box>
                    <Box>
                        <Button style={{ color: '#f70525', justifyContent:'flex-start', forntSize:'12px', textTransform:'none'}} size={"small"} 
                        sx={{ m: 0, p: 0.2, minWidth:0 }}>Remove all</Button>
                        </Box>
                    
                </Box>

                <Box className="content">
                <Grid container spacing={1.5}>

                <Grid item md={2} sm={2} >

                    <Suggestion/>
                </Grid>

                <Grid  item md={10} sm={10} >
                <Box className = "card-text">
                    <Grid  container spacing={2} >
                            {object.map((ele) => {
                        return (
                            <Grid item xs={6} sm={4} md={3} key={ele.id}>
                            <ProductCard object={ele}/>
                            </Grid>
                        );
                        })}
                        </Grid>
                </Box>
                    

                </Grid>
                
                </Grid>
                </Box>

        </Box>
        </>
    )

}

export default Display;