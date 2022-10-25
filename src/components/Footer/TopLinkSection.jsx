import React from 'react';
import * as Scroll from 'react-scroll';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import CustomContainer from 'components/CustomContainer';
import EditionDropdown from 'components/EditionDropdown';
import logoImg from 'assets/img/logo.png';
import styles from 'assets/jss/components/footerStyles';

const useStyles = makeStyles(styles);

const TopLinkSection = () => {

  const classes = useStyles();
  const scroll = Scroll.animateScroll;

  return (
    <Box className={classes.topLinksWrapper}>
      <CustomContainer>
        <ul className={classes.topLinks}>
          <li className={classes.logo}>
            <Link href='/' underline='none'>
              press.algo
            </Link>
          </li>
          <li className={classes.editionDropdown}>
            <EditionDropdown />
          </li>
          <li className={classes.loginSub}>
            <ul>
              <li className={classes.subscribeBtn}>
                <Link href='/' underline='none'>
                  Subscribe Now
                </Link>
              </li>
              <li className={classes.loginBtn}>
                <Link href='/' underline='none'>
                  Sign In
                </Link>
              </li>
            </ul>
          </li>
          <li className={classes.backTopBtn}>
            <Button onClick={() => scroll.scrollToTop()}>
              Back to Top
              <span className={classes.backToTopIcon}>«</span>
            </Button>
          </li>
        </ul>
      </CustomContainer>
    </Box>
  )
}

export default TopLinkSection;
