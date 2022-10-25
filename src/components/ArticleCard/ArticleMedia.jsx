import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import styles from 'assets/jss/components/articleCardStyles';

const useStyles = makeStyles(styles);

const ArticleMedia = (props) => {

  const { link, image, className } = props;

  const classes = useStyles();

  const classNames = clsx(
    'article-card-media',
    classes.articleMedia,
    {
      [className]: className
    }
  );

  return (
    <Box className={classNames}>
      <Link href={link ?? '/'} >
        <CardMedia
          component="img"
          image={image}
          alt=""
        />
      </Link>
    </Box>
  )
}

export default ArticleMedia;
