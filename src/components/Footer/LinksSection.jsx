import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import CustomContainer from 'components/CustomContainer';

import { mainLinks } from 'assets/mockdata/footerLinksData';
import styles from 'assets/jss/components/footerStyles';

const useStyles = makeStyles(styles);

const LinksSection = () => {

  const classes = useStyles();

  return (
    <Box className={classes.linksSection} pb={2}>
      <CustomContainer>
        <Box display='flex'>
          {
            mainLinks.map((cell, index) => (
              <Box className={classes.linksBox} key={cell.title} sx={{ borderLeft: index === 0 ? '' : '1px solid #ccc' }}>
                <Typography variant='body1' fontSize='14pt' lineHeight={1.2} fontWeight={500} fontFamily='Times New Roman'>
                  {cell.title}
                </Typography>
                <ul>
                  {
                    cell.children.map((link) => (
                      <li key={link.text}>
                        <Link href={link.link} underline='none' fontSize={14} lineHeight={1} sx={{ color: '#000' }}>
                          {link.text}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </Box>
            ))
          }
        </Box>
      </CustomContainer>
    </Box>
  )
}

export default LinksSection;
