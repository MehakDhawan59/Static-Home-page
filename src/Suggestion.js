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
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Table from 'react-bootstrap/Table';
import {
    CircularProgress,
    Grid,
    InputAdornment,
    TextField
  } from "@mui/material";
  import { Search, SentimentDissatisfied } from "@mui/icons-material";
  import { styled } from '@mui/material/styles';
import './Suggestion.css';


  
  function Suggestion(){
    return (
        <>
        <Table className='table-text'>
        <thead className="table-heading">
        <tr>
          <th >Related Categories</th>
        </tr>
      </thead>
      <tbody className='table-body'>
        <tr>
          <td style={{wordWrap:'break-word'}}>Paracetemol tablets
          <Button style={{color: 'white', fontSize:"10px" ,marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
          </td>
        </tr>
        <tr>
        <td>Paracetemol Syrup
        <Button style={{color: 'white', fontSize:"10px",marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        <tr>
        <td>Paracetemol Powder
        <Button style={{color: 'white', fontSize:"10px", marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        <tr>
        <td>Acedofanac
        <Button style={{color: 'white', fontSize:"10px", marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        <tr>
        <td style={{wordWrap:'break-word'}}> Malafemic Paracetemol syrup
        <Button style={{color: 'white', fontSize:"10px",marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button></td>
        </tr>
        <tr>
        <td style={{wordWrap:'break-word'}}> Malafemic Paracetemol syrup
        <Button style={{color: 'white', fontSize:"10px",marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
      </tbody>
      
      </Table>

      <Table className='table-text'>
        <thead className="table-heading">
        <tr>
          <th >Related Brands</th>
        </tr>
      </thead>
      <tbody className='table-body'>
        <tr>
          <td style={{wordWrap:'break-word'}}>Cipmol Paracetemol
          <Button style={{color: 'white', fontSize:"10px",marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
          </td>
        </tr>
        <tr>
        <td style={{wordWrap:'break-word'}}>Pandal Paracetemol Tablets
        <Button style={{color: 'white', fontSize:"10px" ,marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        <tr>
        <td>Comiflame
        <Button style={{color: 'white', fontSize:"10px",marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        <tr>
        <td>Crocin tablets
        <Button style={{color: 'white', fontSize:"10px",marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        <tr>
        <td style={{wordWrap:'break-word'}}> Calpol Paracetemol Tablets
        <Button style={{color: 'white', fontSize:"10px",marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        <tr>
        <td style={{wordWrap:'break-word'}}> Sumo Tablets
        <Button style={{color: 'white', fontSize:"10px", marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
      </tbody>
      
      </Table>
      <Table className='table-text'>
        <thead className="table-heading">
        <tr>
          <th >Business Types</th>
        </tr>
      </thead>
      <tbody className='table-body'>
        <tr>
          <td style={{wordWrap:'break-word'}}>Wholesaler
          <Button style={{color: 'white', fontSize:"10px",marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
          </td>
        </tr>
        <tr>
        <td style={{wordWrap:'break-word'}}>Manufacturer
        <Button style={{color: 'white', fontSize:"10px",marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        <tr>
        <td>Retailer
        <Button style={{color: 'white', fontSize:"10px",marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        <tr>
        <td>Exporter
        <Button style={{color: 'white', fontSize:"10px",marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        
      </tbody>
      
      </Table>
      <Table className='table-text'>
        <thead className="table-heading">
        <tr>
          <th >Strength</th>
        </tr>
      </thead>
      <tbody className='table-body'>
        <tr>
          <td style={{wordWrap:'break-word'}}>500mg
          <Button style={{color: 'white', fontSize:"10px", marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
          </td>
        </tr>
        <tr>
        <td style={{wordWrap:'break-word'}}>650mg
        <Button style={{color: 'white', fontSize:"10px", marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        
      </tbody>
      
      </Table>
      <Table className='table-text'>
        <thead className="table-heading">
        <tr>
          <th >Manufacturer</th>
        </tr>
      </thead>
      <tbody className='table-body'>
        <tr>
          <td style={{wordWrap:'break-word'}}>Intas Pharmaceutical Ltd
          <Button style={{color: 'white', fontSize:"10px", marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
          </td>
        </tr>
        <tr>
        <td style={{wordWrap:'break-word'}}>Alken Laboratories Ltd
        <Button style={{color: 'white', fontSize:"10px", marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        
      </tbody>
      
      </Table>
      <Table className='table-text'>
        <thead className="table-heading">
        <tr>
          <th >Prescription/Non-prescription</th>
        </tr>
      </thead>
      <tbody className='table-body'>
        <tr>
          <td style={{wordWrap:'break-word'}}>Intas Pharmaceutical Ltd
          <Button style={{color: 'white', fontSize:"10px", marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
          </td>
        </tr>
        <tr>
        <td style={{wordWrap:'break-word'}}>Alken Laboratories Ltd
        <Button style={{color: 'white', fontSize:"10px", marginLeft:"3px"}}sx={{ m: 0, p: 0.2, minWidth:0 }}>X</Button>
        </td>
        </tr>
        
      </tbody>
      
      </Table>
        </>
      );
  }

  export default Suggestion;