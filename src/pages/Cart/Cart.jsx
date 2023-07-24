
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {CartItem} from "../../components/CartItem"
import { resetCart } from "../../redux/cartSlice"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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

export const Cart = () => {
  const productData = useSelector((state)=> state.store.productData)
  const [totalAmount, setTotalAmount] = useState("")
  
  const dispatch = useDispatch()

  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price
    });
    setTotalAmount(price)
  }, [productData])


  return (
    <>
      <Box 
        sx={{ 
          position: 'relative',
          display: 'flex',
          marginTop: '65px',
          padding: "20px"
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: "start", 
            width: "60%",
            padding: "20px",
          }}
        >
          <CartItem/>
        </Box>
        <Box 
          sx={{ 
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: "end", 
            width: "35%",
          }}
        >
          <div style={{
            padding: "20px", 
            width: "100%",
            border: "1px solid #333",
            borderRadius: "20px"
          }} 
          >
            <h2>cart totals</h2>  
            <p>
              Subtotal:  <span>{totalAmount}</span>
            </p>
            <div>
              Total
              <Typography sx={{fontSize: 34, fontWeight: 'medium', color: "#1976d2"}}>
                  ${parseInt(totalAmount)}
              </Typography>
            </div>
            
            <StyledButton onClick={()=> dispatch(resetCart())}
            >
              proceed to checkout
            </StyledButton>  
          </div>
         
        </Box>
      </Box>
    </>
  )
}



