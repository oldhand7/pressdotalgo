import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import MostPopularItem from 'components/MostPopularItem';
import SectionTitle from 'components/SectionTitle';

import { mostPopularNewsData } from 'assets/mockdata/mostPopularData';
import styles from 'assets/jss/pages/homePageStyles';

const useStyles = makeStyles(styles);

const MostPopularNews = () => {

  const classes = useStyles();

  return (
    <Box className={classes.mostPopularNews}>
      <SectionTitle showBorderTop={true}>
        MOST POPULAR NEWS
      </SectionTitle>
      <Box>
        {
          mostPopularNewsData.map((data) => (
            <MostPopularItem key={data.id} data={data} />
          ))
        }
      </Box>
    </Box>
  )
}

export default MostPopularNews;
