import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';

import styles from 'assets/jss/components/sectionTitleStyles';

const useStyles = makeStyles(styles);

const SectionTitle = (props) => {

  const { children, link, showBorderTop, className, ...others } = props;

  const classes = useStyles();

  const classNames = clsx(
    'section-title',
    classes.sectionTitle,
    {
      [classes.showBorderTop]: showBorderTop,
      [className]: className
    }
  )

  return (
    <Typography variant='h2' className={classNames} fontFamily='Times New Roman' {...others}>
      <span>{children}</span>
      {
        !!link && (
          <span
            className={classes.iconLink}
            onClick={() => {
              window.location.href = link
            }}
          >
          </span>
        )
      }
    </Typography>
  )
}

export default SectionTitle;
