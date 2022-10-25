import React from 'react';
import { useMetaMask } from "metamask-react";
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import CustomContainer from 'components/CustomContainer';
import MobileHeader from './MobileHeader';
import HeaderLinkCell from './HeaderLinkCell';
import StickyAppBar from './StickyAppBar';

import useWindowSize from 'hooks/useWindowSize';
import headerLinks from 'assets/mockdata/headerLinks';
import logoImg from 'assets/img/logo.png';
import styles from 'assets/jss/components/headerStyles';

const useStyles = makeStyles(styles);

const Header = (props) => {

  const { handleOpenSidebar, handleOpenSearchBox } = props;
  const classes = useStyles();
  const { isMobile } = useWindowSize();
  const { connect } = useMetaMask();

  return (
    <>
      {
        isMobile ? (
          <MobileHeader handleOpenSidebar={handleOpenSidebar} />
        ) : (
          <>
            <Box className={classes.header} textAlign='center'>
              <CustomContainer>
                <Box position='relative'>
                  <Box className={classes.logoWrapper}>
                    <Typography variant="h6" fontWeight={700} fontSize={{ xs: '30pt', sm: '30pt', md: '40pt', lg: '150pt' }} fontFamily='Times New Roman' sx={{ flexGrow: 1 }}>
                      press.algo
                    </Typography>
                  </Box>
                  <Box className={classes.customerNav} position='absolute'>
                    <Box className={classes.customerNavContainer} textAlign='right'>
                      <Button sx={{ color: '#555' }} onClick={connect}>
                        Algo Network
                      </Button>
                    </Box>
                  </Box>
                  <Box className={classes.mastheadStrap}>
                    <Box display='inline-block'>
                      <Link href='/' underline='none'>Words</Link>
                    </Box>
                    <Box display='inline-block'>
                      <Link href='/' underline='none'>Voices</Link>
                    </Box>
                    <Box display='inline-block'>
                      <Link href='/' underline='none'>Videos</Link>
                    </Box>
                    <Box display='inline-block'>
                      <Link href='/' underline='none'>Creators</Link>
                    </Box>
                  </Box>
                </Box>
              </CustomContainer>

              <Box className={classes.navContainer} position='relative'>
                <ul>
                  {
                    headerLinks.map((linkData) => (
                      <HeaderLinkCell
                        linkData={linkData}
                        key={linkData.title}
                        handleOpenSearchBar={handleOpenSearchBox}
                      />
                    ))
                  }
                </ul>
              </Box>

              <CustomContainer className={classes.searchBtn}>
                <Button endIcon={<SearchIcon />} onClick={handleOpenSearchBox}>
                  <span className='label'>Search</span>
                </Button>
              </CustomContainer>
            </Box>
          </>
        )
      }
      <StickyAppBar
        handleOpenSidebar={handleOpenSidebar}
        handleOpenSearchBox={handleOpenSearchBox}
      />
    </>
  )
}

export default Header;
