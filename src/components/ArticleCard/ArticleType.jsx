import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';

import styles from 'assets/jss/components/articleCardStyles';

const useStyles = makeStyles(styles);

const ArticleType = (props) => {

  const { children, className } = props;
  const classes = useStyles();

  const classNames = clsx(
    classes.articleType,
    {
      [className]: className
    }
  );

  return (
    <Typography variant='body1' className={classNames} fontWeight={400} color='#555'>
      {children}
    </Typography>
  )
}

export default ArticleType;
