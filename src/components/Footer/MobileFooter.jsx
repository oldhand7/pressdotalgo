import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

import CustomButton from 'components/CustomButton';

import styles from 'assets/jss/components/footerStyles';

const useStyles = makeStyles(styles);

const MobileFooter = () => {

  const classes = useStyles();
  const scroll = Scroll.animateScroll;

  const [language, setLanguage] = useState('english');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box>
      <Box className={classes.mobileBackToTop}>
        <Box mx='auto' className={classes.mobileBox}>
          <CustomButton fullWidth onClick={() => scroll.scrollToTop()}>
            Back to top
          </CustomButton>
        </Box>
      </Box>
      <Box mx='auto' className={classes.mobileBox}>
        <Box className={classes.mobileLang}>
          <InputLabel id="demo-simple-select-label">Edition</InputLabel>
          <Select
            value={language}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='chinese'>中文 (Chinese)</MenuItem>
            <MenuItem value='japanese'>日本語 (Japanese)</MenuItem>
          </Select>
        </Box>
      </Box>
      <Divider sx={{ borderColor: '#ccc', marginBottom: '20px', marginTop: '7.5px' }} />
      <Box mx='auto' className={classes.mobileBox}>
        <Box>
          <ul className={classes.mobileSocialLinks}>
            <li>
              <Link href='https://www.facebook.com/wsj' target='_blank' underline='none'>
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link href='https://twitter.com/WSJ' underline='none' target='_blank'>
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/wsj/' underline='none' target='_blank'>
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link href='https://www.youtube.com/user/WSJDigitalNetwork' underline='none' target='_blank'>
                <YouTubeIcon />
              </Link>
            </li>
          </ul>
        </Box>
        <Box className={classes.footerAbout}>
          <Link href='/' underline='none'>
            WSJ Membership Benefits
          </Link>
          <Link href='/' underline='none'>
            Customer Center
          </Link>
          <Link href='/' underline='none'>
            Legal Policies
          </Link>
        </Box>
        <Box className={classes.mobileBadgeLinks}>
          <ul>
            <li>
              <Link href='/' underline='none' className={classes.mobileGooglePlay} />
            </li>
            <li>
              <Link href='/' underline='none' className={classes.mobileAppStore} />
            </li>
          </ul>
        </Box>
      </Box>
      <Divider sx={{ borderColor: '#ccc', marginBottom: '20px', marginTop: '7.5px' }} />
      <Box className={classes.mobileBox} mx='auto'>
        <Box sx={{ margin: '20px 0 10px' }}>
          <CustomButton fullWidth color='blue'>
            Sign In
          </CustomButton>
        </Box>
        <Box className={classes.mobileCopyInfo} sx={{padding: '10px'}}>
          <Typography variant='body1' align='center' fontSize={13} lineHeight='20px' color='#555'>
            © 2022 <Link href='/' underline='none'>Dow Jones & Company</Link> Inc.
            <br />All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MobileFooter;
