import React from 'react';
import { makeStyles } from "@mui/styles";

import Link from '@mui/material/Link';

import CustomContainer from 'components/CustomContainer';

import { privatyCopyLinks } from 'assets/mockdata/footerLinksData';
import styles from 'assets/jss/components/footerStyles';

const useStyles = makeStyles(styles);

const CopyInfoSection = () => {

  const classes = useStyles();

  return (
    <CustomContainer className={classes.copyInoSection}>
      <ul>
        {
          privatyCopyLinks.map((cell) => (
            <li key={cell.text}>
              <Link href='/' underline='none' color={cell.blue ? '#0294e8' : '#000'}>
                {cell.text}
              </Link>
            </li>
          ))
        }
        <li className={classes.copyInfo}>
          Copyright ©2022 &nbsp;<Link href='/' color='#000' underline='none'>Dow Jones & Company</Link>, Inc. All Rights Reserved.
        </li>
      </ul>
    </CustomContainer>
  )
}

export default CopyInfoSection;
