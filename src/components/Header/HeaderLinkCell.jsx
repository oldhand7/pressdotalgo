import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Link from '@mui/material/Link';

import styles from 'assets/jss/components/headerStyles';

const useStyles = makeStyles(styles);

const HeaderLinkCell = (props) => {

  const { linkData } = props;
  const classes = useStyles();

  return (
    <li className={clsx(classes.topMenuItem, { [classes.hasSubMenu]: linkData.hasSubmenu })}>
      <Link href={linkData.link} underline='none' className={classes.sectionLink}>
        {linkData.title}
      </Link>      
    </li>
  )
}

export default HeaderLinkCell;
