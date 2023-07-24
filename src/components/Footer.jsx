import React from 'react';

import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.ippopay.com/">
        IppoPay Technologies Pvt Ltd
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <>
      <Container
        component="footer"
        sx={{
          borderTop: '1px solid #ccc',
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-between">
          <Copyright sx={{ mt: 5 }} />
          <Grid item >
            <GoogleIcon/>
            <GitHubIcon/>
            <YouTubeIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
          </Grid>
        </Grid>
      </Container>
    </>
    
  )
}
