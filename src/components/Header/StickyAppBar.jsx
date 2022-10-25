import React from 'react';
import clsx from 'clsx';
import { useMetaMask } from "metamask-react";
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import HeaderLinkCell from './HeaderLinkCell';
import CustomContainer from 'components/CustomContainer';

import useStickyAppBar from 'hooks/useStickyAppBar';
import useWindowSize from 'hooks/useWindowSize';
import headerLinks from 'assets/mockdata/headerLinks';
import logoImg from 'assets/img/logo.png';
import styles from 'assets/jss/components/headerStyles';

const useStyles = makeStyles(styles);

const StickyAppBar = (props) => {

  const { handleOpenSidebar, handleOpenSearchBox } = props;
  const classes = useStyles();
  const showStickyAppBar = useStickyAppBar();
  const { isMobile } = useWindowSize();
  const { connect } = useMetaMask();

  return (
    <Box className={clsx(classes.stickyBar, { [classes.showStickyBar]: showStickyAppBar })}>
      {
        isMobile ? (
          <Box className={classes.mobileHeader}>
            <Box position='relative' sx={{ zIndex: 0, backgroundColor: '#fff' }}>
              <Box className={classes.mobileHeaderInner} position='relative' display='flex'>
                <IconButton onClick={handleOpenSidebar}>
                  <MenuIcon />
                </IconButton>
                <Box className={classes.mobileHeaderLogo} mx='auto' display='inline-block'>
                  <Typography variant="h6" fontWeight={700} fontSize={{ xs: '30pt', sm: '30pt', md: '40pt' }} fontFamily='Times New Roman' sx={{ flexGrow: 1 }}>
                    press.algo
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box className={clsx(classes.header, classes.stickyHeader)} textAlign='center'>
            <CustomContainer>
              <Box position='relative'>
                <Box className={clsx(classes.logoWrapper, classes.stickyLogoWrapper)}>
                  <Typography variant="h6" fontWeight={700} fontSize={{ xs: '30pt', sm: '30pt', md: '40pt', lg: '40pt' }} fontFamily='Times New Roman' sx={{ flexGrow: 1 }}>
                    press.algo
                  </Typography>
                </Box>
                <Box className={clsx(classes.customerNav, classes.stickyCustomNav)} position='absolute'>
                  <Box className={classes.customerNavContainer} textAlign='right'>
                    <Button sx={{ color: '#555' }} onClick={connect}>
                      Algo Network
                    </Button>
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
        )
      }
    </Box>
  )
}

export default StickyAppBar;
