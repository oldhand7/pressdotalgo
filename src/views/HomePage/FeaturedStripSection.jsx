import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import FeaturedStripItem from 'components/FeaturedStripItem';

import { featuredStrips } from 'assets/mockdata/featuredStrips';
import styles from 'assets/jss/pages/homePageStyles';

const useStyles = makeStyles(styles);

const FeaturedStripSection = () => {

  const classes = useStyles();
  
  const [searchText, setSearchText] = useState('');

  return (
    <Box className={classes.featuredStripSection}>
      <Typography variant='h3' align='center' fontFamily='Times New Roman' className={classes.groupTitle}>
        Creators
      </Typography>
      <Box className={classes.contentsInner}>
        <Box className={clsx(classes.column, classes.leftColumn)}>
          <Grid container spacing={4} rowSpacing={2}>
            {
              featuredStrips.map((cell) => (
                <Grid item sm={4} md={4} lg={4} key={cell.title}>
                  <FeaturedStripItem data={cell} />
                </Grid>
              ))
            }
          </Grid>
        </Box>
        <Box className={clsx(classes.column, classes.rightColumn)}>
          <Box className={classes.searchBar}>
            <OutlinedInput
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
              fullWidth
              placeholder='Search...'
            />
          </Box>
          <Box mt={3} textAlign='center'>
            <Link href='/' fontFamily='Times New Roman' fontSize='14pt'>
              Creator Home
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FeaturedStripSection;
