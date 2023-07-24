import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import { decrementQantity, deleteFromCart, incrementQuantity } from "../redux/cartSlice";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export const CartItem = () => {
  const dispatch = useDispatch()

  const productData = useSelector((state)=> state.store.productData)

  return (
    <>
    <Grid 
      container 
      spacing={2} 
    >
      {
        productData.map((item, key)=>{
          return (
            <Grid 
              key={key} 
              item 
              xs={12} 
              md={12}
              sx = {{
                display: "flex",
                border: "1px solid #333",
                borderRadius: "20px",
                marginBottom: "10px",
                alignItems: "flex-start",
                padding: "10px"
              }} 
            >
              <CloseIcon 
                onClick={()=> dispatch(deleteFromCart(item.id))} 
                sx = {{
                  display: "flex",
                  alignItems: "flex-start"
                }} 
              />
              <img 
                src={item.image} 
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain"
                }}
                className="w-32 h-32 object-cover"
                alt={item.title} 
              />
              <div style={{marginLeft: "20px"}}>
                <Typography sx={{fontSize: 30, fontWeight: 'medium',}}>
                  {item.title}
                </Typography>
                
                <div 
                  style={{
                    display: "flex", 
                    justifyContent: "center", 
                    margin: "10px",
                    padding: "10px",
                    gap: "10px",
                    border: "1px solid black",
                    width: "150px"
                  }}>
                  <Typography>Quantity</Typography>
                  <button 
                    onClick={() => dispatch(
                      decrementQantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description
                      })
                    )}
                  >-</button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={()=> dispatch(
                      incrementQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description
                      })
                    )} 
                  >+</button>
                </div>
                    
                <Typography sx={{fontSize: 34, fontWeight: 'medium', color: "#1976d2"}}>
                  ${item.price * item.quantity}
                </Typography>
              </div>
            </Grid>
          );
        })
      }
    </Grid>
    </>
    

  )
}


