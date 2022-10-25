import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import styles from 'assets/jss/components/mostPopularItemStyles';

const useStyles = makeStyles(styles);

const MostPopularItem = (props) => {

  const { data } = props;
  const classes = useStyles();

  return (
    <Box>
      <Link underline='none' href='/' className={classes.mostPopularItem}>
        <Box className={clsx(classes.text)} alignItems='center'>
          <Typography variant='body1' fontWeight={600} fontFamily='Times New Roman' color='#555' className={classes.mark}>
            {data.id}
          </Typography>
          <Typography variant='h3' fontWeight={600} color='#222' fontFamily='Times New Roman'>
            {data.text}
          </Typography>
        </Box>
      </Link>
    </Box>
  )
}

export default MostPopularItem;
