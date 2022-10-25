import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import styles from 'assets/jss/components/featuredStripItemStyles';

const useStyles = makeStyles(styles);

const FeaturedStripItem = (props) => {

  const { data } = props;
  const classes = useStyles();

  return (
    <Box className={classes.featuredStrip}>
      <Box className={classes.featuredStripText}>
        <Typography variant='h3' fontWeight={700} fontFamily='Times New Roman'>
          <Link underline='none' href={data.link}>
            {data.title}
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default FeaturedStripItem;
