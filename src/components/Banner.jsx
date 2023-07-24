import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BannerLayout from './BannerLayout';
// import BannerImage from '../assets/banner1.webp'
import BannerImage from '../assets/banner2.jpg'

export const Banner = () => {

  return (
    <>
      <BannerLayout
        sxBackground={{
          backgroundImage: `url(${BannerImage})`,
          backgroundColor: '#7fc7d9',
          backgroundPosition: 'center',
        }}
      >
        <img
          style={{ display: 'none' }}
          src={BannerImage}
          alt="increase priority"
        />
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Shopping Everyday
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
        >
          Enjoy secret offers up to -70% off the best luxury items every Sunday.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          component="a"
          href="#"
          sx={{ minWidth: 200 }}
        >
          Register
        </Button>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          Discover the experience
        </Typography>
      </BannerLayout>
    </>
  )
}
