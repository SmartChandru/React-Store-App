import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { ProductsCard } from "./ProductsCard"

export const Products = ({products})=>{

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Make Your Style
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Make it short and sweet, but not too short so folks
            don&apos;t simply skip over it entirely.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 2, px: 2 }} maxWidth="xl">
      <Grid container spacing={4}>
          {products.map((product, key) => (
            <Grid item key={key} xs={6} sm={4} md={3}>
              <ProductsCard product={product} key={key}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
    
  )
}


