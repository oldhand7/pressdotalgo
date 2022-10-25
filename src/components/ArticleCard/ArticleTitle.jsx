import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import styles from 'assets/jss/components/articleCardStyles';

const useStyles = makeStyles(styles);

const ArticleTitle = (props) => {

  const { children, size, className, textAlign, link, timeToRead } = props;
  const classes = useStyles();

  const classNames = clsx(
    'article-card-title',
    classes.articleTitle,
    {
      [className]: className,
      [classes.largeTitle]: size === 'large',
      [classes.normalTitle]: size === 'medium',
    }
  );

  return (
    <Box className={classNames}>
      <Typography variant='h3' fontWeight={700} align={textAlign ?? 'left'}>
        <Link underline='none' href={link ?? '/'}>
          <span>
            {children}
          </span>
          {
            timeToRead && (
              <span className={classes.timeToRead}>
                <AccessTimeIcon />
                <span>{timeToRead}</span>
              </span>
            )
          }
        </Link>
      </Typography>
    </Box>
  )
}

export default ArticleTitle;
