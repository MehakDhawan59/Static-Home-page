import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import './ProductCard.css';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
const ProductCard =({object})=>

{
    return (
        <Card sx={{ maxWidth: 345 , border:`1px solid grey`}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={object.image}
              alt={object.name}
              sx={{padding:1, borderRadius:3}}
            />
            <CardContent className='card-content' sx={{padding:0}}>
              <Typography fontSize="13px">
                <b>{object.name}</b>
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center" marginBottom="15px">
              <Typography  color="rgb(116, 34, 34)" fontSize="15px">
                <b >{object.price}{' '}</b>
              </Typography>
              <Typography color="text.secondary" fontSize="15px"> / stripe</Typography>
              </Box>
              
              <Box marginTop="3px" marginBottom="15px">
              <Typography fontSize="12px">
                <b>{object.companyname}</b>
              </Typography>
              <Typography  fontSize="12px" color="text.secondary">
                {object.address}
              </Typography>
              </Box>
              <Divider orientation="horizontal" flexItem>
              </Divider>
              <Box>

                <Button style={{color:'#5fa382', fontWeight:'bolder'}}>
                  <TelegramIcon/>Contact Supplier</Button>
              </Box>
              <Box height="10px" padding="0px" margin="0px" backgroundColor= "rgb(116, 34, 34)"></Box>
            </CardContent>
          </CardActionArea>
        </Card>
      );

}

export default ProductCard;