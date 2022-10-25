import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import arrowDownIcon from 'assets/img/arrowDown.svg';
import arrowUpIcon from 'assets/img/arrowUp.svg';

import styles from 'assets/jss/components/marketTicketItemStyles';

const useStyles = makeStyles(styles);

const MarketTicketItem = (props) => {

  const { data } = props;
  const classes = useStyles();

  return (
    <Link 
      href='/' 
      variant='button' 
      className={clsx(classes.ticketItem, { [classes.down]: data.percent < 0, [classes.up]: data.percent >= 0 })} 
      underline='none'
    >
      {
        data.percent >= 0 ? <img src={arrowUpIcon} alt="" /> : <img src={arrowDownIcon} alt="" />
      }
      
      <Box className={classes.ticketData}>
        <Typography variant='h6' fontWeight={500} color='#222' fontSize={13} lineHeight='17px'>
          {data.title}
        </Typography>
        <Typography variant='body1' fontWeight={500} fontSize={13} lineHeight='17px'>
          {data.value}
          <span>{`${data.percent}%`}</span>
        </Typography>
      </Box>
    </Link>
  )
}

export default MarketTicketItem;
