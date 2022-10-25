import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import styles from 'assets/jss/components/articleCardStyles';

const useStyles = makeStyles(styles);

const ArticleCard = (props) => {

  const { children, hideBottomDivider, className } = props;
  const classes = useStyles();

  const classNames = clsx(
    'article-card',
    classes.articleCard,
    {
      [className]: className,
      [classes.lastCard]: !!hideBottomDivider
    }
  );

  return (
    <Box className={classNames}>
      {children}
    </Box>
  )
}

export default ArticleCard;
