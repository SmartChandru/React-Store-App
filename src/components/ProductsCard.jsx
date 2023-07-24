import React from 'react';
import {useDispatch} from "react-redux"

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { addToCart } from '../redux/cartSlice';

const StyledButton = styled(Button)({
  fontSize: 16,
  marginBottom: 2,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#fff',
  borderColor: '#0063cc',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#0062cc',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#ccc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export const ProductsCard = ({product}) => {

  const dispatch = useDispatch()

  const {title, price, image} =product;


  return (
    <>
      <Card
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        <CardMedia
          component="div"
          sx={{
            pt: '56.25%',
          }}
          image={image}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom sx={{ fontWeight: 'medium', minHeight:'60px' }}>
            {title}
          </Typography>
          
          <Typography sx={{ textAlign: "center", color: "#1976d2", fontSize: 34 }}>
            ${price}
          </Typography>
          
        </CardContent>
        <CardActions sx= {{ display: "flex", justifyContent: "center"}}>
          <StyledButton
            onClick={() => dispatch(
              addToCart({
                id: product.id, 
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1,
                description: product.description
              })
            )} 
          >
            Add To Cart
          </StyledButton>
        </CardActions>
      </Card>
    </>
  )
}


