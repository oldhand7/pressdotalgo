import React from 'react';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';

const CustomContainer = styled((props) => (
  <Container {...props} />
))(({ theme }) => ({
  '&.MuiContainer-root': {
    paddingLeft: '10px',
    paddingRight: '10px',
    maxWidth: '1280px'
  },
  [theme.breakpoints.down('lg')]: {
    '&.MuiContainer-root': {
      maxWidth: '960px',
      paddingLeft: '0px',
      paddingRight: '0px'
    },
  },
  [theme.breakpoints.down('md')]: {
    '&.MuiContainer-root': {
      maxWidth: '640px',
      paddingLeft: '10px',
      paddingRight: '10px'
    },
  },
}));

export default CustomContainer;
