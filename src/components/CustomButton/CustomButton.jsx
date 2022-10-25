import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Button from '@mui/material/Button';

import styles from 'assets/jss/components/buttonStyles';

const useStyles = makeStyles(styles);

const CustomButton = (props) => {

  const {children, className, color, ...btnProps} = props;
  const classes = useStyles();

  const classNames = clsx(
    classes.btn,
    {
      [className]: className,
      [classes.blueBtn]: color === 'blue'
  }
  )

  return (
    <Button {...btnProps} className={classNames}>
      {children}
    </Button>
  )
}

export default CustomButton;
