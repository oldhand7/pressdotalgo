import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import TopLinkSection from './TopLinkSection';
import CopyInfoSection from './CopyInfoSection';
import MobileFooter from './MobileFooter';

import useWindowSize from 'hooks/useWindowSize';

import styles from 'assets/jss/components/footerStyles';

const useStyles = makeStyles(styles);

const Footer = () => {

  const classes = useStyles();
  const { isMobile } = useWindowSize();

  return (
    <Box className={classes.footerWrapper}>
      {
        isMobile ? (
          <MobileFooter />
        ) : (
          <>
            <TopLinkSection />
            <CopyInfoSection />
          </>
        )
      }
    </Box>
  )
}

export default Footer;
