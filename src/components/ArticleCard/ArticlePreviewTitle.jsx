import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import styles from 'assets/jss/components/articleCardStyles';

const useStyles = makeStyles(styles);

const ArticlePreviewTitle = (props) => {

  const { children, className, textAlign, link, showBorderTop } = props;
  const classes = useStyles();

  const classNames = clsx(
    'article-card-preview-title',
    classes.articlePreviewTitle,
    {
      [className]: className,
      [classes.showPreviewBorderTop]: showBorderTop
    }
  );

  return (
    <Box className={classNames} position='relative'>
      <Typography variant='h3' fontWeight={700} align={textAlign ?? 'left'} fontFamily='Times New Roman'>
        <Link underline='none' href='/'>
          {children}
        </Link>
      </Typography>
      <Box sx={{paddingLeft: '30px'}}>
        <span>Views: 3</span>
        <span>by swan</span>
        <Link underline='none' href='/' fontSize={14} sx={{ color: '#0080c3 !important', fontWeight: '400 !important' }}>Preview</Link>
      </Box>
    </Box>
  )
}

export default ArticlePreviewTitle;
