import React from 'react';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import styles from 'assets/jss/components/couponItemStyles';

const useStyles = makeStyles(styles);

const CouponItem = (props) => {

  const { coupon } = props;

  const classes = useStyles();

  return (
    <li className={classes.couponItem}>
      <Typography variant='body1' color='#333'>
        {`${coupon.subTitle}:`}
      </Typography>
      <Link href={coupon.link} underline='none'>
        {coupon.title}
      </Link>
    </li>
  )
}

export default CouponItem;
