import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import styles from 'assets/jss/components/opinionCardStyles';

const useStyles = makeStyles(styles);

const OpinionCard = (props) => {

  const { opinion } = props;
  const classes = useStyles();

  return (
    <Box className={classes.opinionCard} display='flex'>
      {
        opinion.avatar && (
          <Box className={classes.avatar}>
            <Link href={opinion.link}>
              <img src={opinion.avatar} alt="" width='100%' height='100%' />
            </Link>
          </Box>
        )
      }
      <Box className={classes.infoBody}>
        <Typography variant='h3' color='#333' fontWeight={700} fontFamily='Times New Roman'>
          <Link href={opinion.link} underline='none'>
            {opinion.title}
          </Link>
        </Typography>
        <Typography variant='body1' fontWeight={400} fontFamily='Times New Roman' color='#555'>
          {opinion.subTitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default OpinionCard;
