import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from 'assets/jss/components/articleCardStyles';

const useStyles = makeStyles(styles);

const ArticleVideo = (props) => {

  const { className, bottomText, url } = props;
  const classes = useStyles();

  const classNames = clsx(
    'article-card-video',
    classes.articleVideo,
    {
      [className]: className
    }
  );

  return (
    <Box className={classNames}>
      <iframe
        width="100%"
        height="341px"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      {
        bottomText && (
          <Typography variant='body1' color='#555' fontWeight={300} fontFamily='Times New Roman'>
            {bottomText}
          </Typography>
        )
      }
    </Box>
  )
}

export default ArticleVideo;
