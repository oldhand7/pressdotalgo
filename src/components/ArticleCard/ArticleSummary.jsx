import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import styles from 'assets/jss/components/articleCardStyles';

const useStyles = makeStyles(styles);

const ArticleSummary = (props) => {

  const { children, className, comment, timeToRead, textAlign } = props;
  const classes = useStyles();

  const classNames = clsx(
    'article-card-summary',
    classes.articleSummary,
    {
      [className]: className
    }
  );

  return (
    <Typography variant='body1' fontFamily='Times New Roman' color='#222' fontWeight={300} className={classNames} textAlign={textAlign ?? 'left'}>
      <span className={classes.summaryText}>
        {children}
      </span>
      <span className={classes.stats}>
        {
          !!comment && (
            <Link href={comment.link} underline='none' className={classes.commentCount}>
              <ChatBubbleOutlineIcon />
              <span>{comment.count}</span>
            </Link>
          )
        }
        <span className={classes.timeToRead}>
          <AccessTimeIcon />
          <span>{timeToRead}</span>
        </span>
      </span>
    </Typography>
  )
}

export default ArticleSummary;
