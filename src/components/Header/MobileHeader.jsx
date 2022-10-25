import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/CustomButton';
import logoImg from 'assets/img/logo.png';
import styles from 'assets/jss/components/headerStyles';

const useStyles = makeStyles(styles);

const MobileHeader = (props) => {

  const { handleOpenSidebar } = props;
  const classes = useStyles();

  return (
    <Box className={classes.mobileHeader}>
      <Box position='relative' sx={{ zIndex: 0, backgroundColor: '#fff' }}>
        <Box className={classes.mobileHeaderInner} position='relative' display='flex'>
          <IconButton onClick={handleOpenSidebar}>
            <MenuIcon />
          </IconButton>
          <Box className={classes.mobileHeaderLogo} mx='auto' display='inline-block'>
            <Typography variant="h6" fontWeight={700} fontSize={{ xs: '30pt', sm: '30pt', md: '40pt', lg: '150pt' }} fontFamily='Times New Roman' sx={{ flexGrow: 1 }}>
              press.algo
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.mobileLoginBtns} mx='auto' display='flex' justifyContent='center'>
        <Box>
          <CustomButton fullWidth color='blue'>
            Subscribe
          </CustomButton>
        </Box>
        <Box>
          <CustomButton fullWidth>
            Sign In
          </CustomButton>
        </Box>
      </Box>
    </Box>
  )
}

export default MobileHeader;
