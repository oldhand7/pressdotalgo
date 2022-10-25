import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import styles from 'assets/jss/components/articleCardStyles';

const useStyles = makeStyles(styles);

const ArticleBullets = (props) => {

  const { bullets, className } = props;

  const classes = useStyles();

  const classNames = clsx(
    classes.bullets,
    {
      [className]: className
    }
  );

  return (
    <ul className={classNames}>
      {
        bullets.map((bullet, index) => (
          <li key={`${index}-${bullet.text}-${bullet.link}`}>
            <Typography variant='h4'>
              <Link href={bullet.link} underline='none' fontWeight={500} color='#222' fontFamily='Times New Roman'>
                {bullet.text}
              </Link>
            </Typography>
          </li>
        ))
      }
    </ul>
  )
}

export default ArticleBullets;
