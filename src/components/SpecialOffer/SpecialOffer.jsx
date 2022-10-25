import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import CustomContainer from 'components/CustomContainer';
import logoImg from 'assets/img/logo.png';
import styles from 'assets/jss/components/specialOfferStyles';

const useStyles = makeStyles(styles);

const SpecialOffer = (props) => {

  const { hideSpecialOffer } = props;
  const classes = useStyles();

  return (
    <Box position='fixed' className={classes.specialOffer}>
      <CustomContainer>
        <Box className={classes.specialOfferInner} display='flex' alignItems='center' justifyContent='space-between'>
          <Box className={classes.brand}>
            <Typography variant="h6" fontWeight={700} fontSize={{ xs: '20pt', sm: '20pt', md: '30pt', lg: '30pt' }} fontFamily='Times New Roman' sx={{ flexGrow: 1 }}>
              press.algo
            </Typography>
          </Box>
          <Typography variant='h3' color='#222222' fontFamily='Times New Roman' fontWeight={700} align='center'>
            Subscribe to become a creator
          </Typography>
          <Typography variant='body1' color='#015483' fontFamily='Times New Roman' fontWeight={500} align='center'>
            $10 per month
          </Typography>
          <Link href='https://store.wsj.com/shop/us/us/wsjusnsswg217av3/?swg=true&inttrackingCode=aaqx8slm&icid=WSJ_ON_NA_ACQ_NA&n2IKsaD9=n2IKsaD9&Pg9aWOPT=Pg9aWOPT&Cp5dKJWb=Cp5dKJWb&APCc9OU1=APCc9OU1&cx_campaign=WSJUSSwGNS' variant='button' underline='none'>
            View Options
          </Link>
        </Box>
      </CustomContainer>
      <IconButton className={classes.closeBtn} onClick={hideSpecialOffer}>
        <CloseIcon />
      </IconButton>
    </Box>
  )
}

export default SpecialOffer;
