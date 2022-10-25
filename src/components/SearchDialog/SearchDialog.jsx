import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';

import CustomContainer from 'components/CustomContainer';

import styles from 'assets/jss/components/searchDialogStyles';

const useStyles = makeStyles(styles);

const SearchDialog = (props) => {

  const { handleClose, open, handleCloseSidebar } = props;
  const classes = useStyles();

  const [searchTxt, setSearchTxt] = useState('')

  return (
    <Dialog onClose={handleClose} open={open} className={classes.dialog}>
      <Box className={classes.pcSearchBox} position='relative'>
        <IconButton onClick={handleClose} className={classes.closeBtn}>
          <CloseIcon />
        </IconButton>
        <CustomContainer>
          <Box className={classes.searchForm} mx='auto'>
            <Input
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
              placeholder='Enter News, Quotes, Companies or Videos'
              endAdornment={
                <InputAdornment position="start">
                  <Button variant='contained' endIcon={<SearchIcon />} disabled={searchTxt === ''}>
                    Search
                  </Button>
                </InputAdornment>
              }
              fullWidth
            />
          </Box>
        </CustomContainer>
      </Box>
      <Box className={classes.mobileSearchBox}>
        <Box position='relative' sx={{ zIndex: 0, backgroundColor: '#fff' }}>
          <Box className={classes.mobileHeaderInner} position='relative' display='flex'>
            <IconButton onClick={() => {
              handleClose();
            }}>
              <MenuIcon />
            </IconButton>
            <Box className={classes.mobileHeaderLogo} mx='auto' display='inline-block'>
              <Link href='/' underline='none'>
                press.algo
              </Link>
            </Box>
            <IconButton
              className={classes.mobileSearchBtn}
              onClick={() => {
                handleClose();
                handleCloseSidebar();
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>

          <Box className={classes.mobileSearchForm}>
            <OutlinedInput
              placeholder='Search'
              fullWidth
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
              endAdornment={
                <InputAdornment position="start">
                  <Button variant='contained' disabled={searchTxt === ''}>
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              }
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  )
}

export default SearchDialog;
