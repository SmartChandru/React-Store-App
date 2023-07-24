import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BannerStyleImage from '../assets/BannerStyleImage.png'

const BannerLayoutRoot = styled('section')(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    minHeight: 500,
    maxHeight: 1300,
    marginTop: '65px',
}));

const Background = styled(Box)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
});

function BannerLayout(props) {
    const { sxBackground, children } = props;
  
    return (
       <>
        <BannerLayoutRoot>
            <Container
                sx={{
                    mt: 3,
                    mb: 14,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img
                    src={BannerStyleImage}
                    alt="wonder"
                    width="147"
                    height="80"
                />
                {children}
                <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: 'common.black',
                    opacity: 0.5,
                    zIndex: -1,
                }}
                />
                <Background sx={sxBackground} />
            </Container>
        </BannerLayoutRoot>
       </>
      
        
    );
}
  
BannerLayout.propTypes = {
    children: PropTypes.node,
    sxBackground: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default BannerLayout;