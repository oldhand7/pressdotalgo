import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import CustomButton from 'components/CustomButton';
import CollpaseLink from './CollpaseLink';
import { topLinks, pageLinks } from 'assets/mockdata/drawerLinks';

import diviceImg from 'assets/img/device-montage.png';

import styles from 'assets/jss/components/menuDrawerStyles';

const useStyles = makeStyles(styles);

const MenuDrawer = (props) => {

  const { open, handleClose, handleOpenSearchBox } = props;
  const classes = useStyles();
  const [value, setValue] = useState('sections');
  const [page, setPage] = useState('')

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Drawer
      anchor='left'
      open={open}
      onClose={handleClose}
      className={classes.drawer}
    >
      <Box>
        <Box position='relative' sx={{ zIndex: 0, backgroundColor: '#fff' }}>
          <Box className={classes.head} position='relative' display='flex'>
            <IconButton className={classes.toggleBtn} onClick={handleClose}>
              <MenuIcon />
            </IconButton>
            <Box className={classes.headLogo} mx='auto' display='inline-block'>
              <Link href='/' underline='none'>
                press.algo
              </Link>
            </Box>
            <IconButton className={classes.searchBtn} onClick={handleOpenSearchBox}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>

        <Box className={classes.drawerContents} position='fixed'>
          <Box height='100%'>
            <TabContext value={value}>
              <Box>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Sections" value="sections" />
                  <Tab label="My Account" value="account" />
                </TabList>
              </Box>
              <Box className={classes.tabContents} position='relative'>
                <TabPanel value="sections">
                  <Box className={classes.sectionsContents}>
                    <Box display='flex' className={classes.topLinks} flexWrap='wrap' mb={2}>
                      {
                        topLinks.map((page) => (
                          <Link href={page.link} color='#555' underline='none' key={page.text}>
                            {page.text}
                          </Link>
                        ))
                      }
                    </Box>
                    <Box>
                      {
                        pageLinks.map((pageLink) => (
                          <CollpaseLink
                            key={pageLink.title}
                            pageLink={pageLink}
                            expanded={page === pageLink.title}
                            handleExpandClick={() => setPage(page === pageLink.title ? '' : pageLink.title)}
                          />
                        ))
                      }
                    </Box>
                  </Box>
                </TabPanel>
                <TabPanel value="account">
                  <Box className={classes.accountContents} position='relative'>
                    <Box className={classes.accountContentsInner} mx='auto' position='relative' display='flex' flexDirection='column' justifyContent='center'>
                      <Box className={classes.adContainer} textAlign='center'>
                        <Typography variant='body1' align='center' color='#333' fontSize={13} fontWeight={500} fontFamily='Times New Roman' sx={{ marginBottom: '20px', textTransform: 'uppercase' }}>
                          Become A WSJ Member
                        </Typography>
                        <Link href='https://subscribe.wsj.com/hpheaderlink'>
                          <img src={diviceImg} alt="" />
                        </Link>
                        <Typography variant='h3' align='center' fontSize={28} fontWeight={600} lineHeight='32px' fontFamily='Times New Roman' sx={{ margin: '20px 0 3px' }}>
                          Unlock Your Potential
                        </Typography>
                        <Typography variant='body1' align='center' fontSize={15} lineHeight={1.5} color='#555'>
                          Stay informed with unrivaled insights and <br />analysis from The Wall Street Journal.
                        </Typography>
                      </Box>
                      <Box className={classes.actionsContainer}>
                        <Box>
                          <CustomButton fullWidth color='blue'>
                            SUBSCRIBE
                          </CustomButton>
                        </Box>
                        <Box mt={2}>
                          <CustomButton fullWidth>
                            SIGN IN
                          </CustomButton>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Box>
      </Box>
    </Drawer>
  )
}

export default MenuDrawer;
