import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { productsLinks } from 'assets/mockdata/footerLinksData'
import styles from 'assets/jss/components/footerStyles';

const useStyles = makeStyles(styles);

const ProductsSection = () => {

  const classes = useStyles();

  return (
    <Box className={classes.productSection}>
      <Box className={classes.productsInnder} mx='auto' textAlign='center'>
        <Typography variant='body1' fontWeight={500} fontSize={14} align='center'>
          Dow Jones Products
        </Typography>
        <ul>
          {
            productsLinks.map((cell) => (
              <li key={cell.text} className={clsx({ [classes.noBorder]: cell.noBorder })}>
                <Link href={cell.link} underline='none' fontSize={14} fontFamily='Times New Roman' color='#000'>
                  {cell.text}
                </Link>
              </li>
            ))
          }
        </ul>
      </Box>
    </Box>
  )
}

export default ProductsSection;
