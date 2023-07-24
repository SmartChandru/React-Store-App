import { useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';

import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = () => {
  const productData = useSelector((state) => state.store.productData)
  
  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        style={{
          textAlign: 'center'
        }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Blog
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Shop
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Contact
            </Link>
          </nav>
            <Typography variant="h4" noWrap sx={{ flexGrow: 1 }}>
              <Link href="/" underline="none" >
                  IPPO PAY STORE
              </Link>
            </Typography>
          <div style={{marginRight: "40px"}}>
            <Button href="#">
              <PersonIcon sx={{ color: "black" }}/>
            </Button>
            <Button href="/cart">
              <Badge badgeContent={productData.length} color="primary">
                <ShoppingCartIcon  sx={{ color: "black" }} />
              </Badge>
            </Button>
            
          </div>
          
        </Toolbar>
      </AppBar>
    </>
  )
}


