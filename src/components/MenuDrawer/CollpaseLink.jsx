import React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

import styles from 'assets/jss/components/menuDrawerStyles';

const useStyles = makeStyles(styles);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Box display='flex' alignItems='center' {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CollpaseLink = (props) => {

  const { pageLink, expanded, handleExpandClick } = props;
 
  const classes = useStyles();
 
  return (
    <Box className={classes.collapseLink}>
      <Button fullWidth onClick={handleExpandClick}>
        {pageLink.title}
        <ExpandMore
          expand={expanded}        
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Button>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box mb={2} display='flex' flexWrap='wrap' className={classes.subLinks}>
          {
            pageLink.children.map((link) => (
              <Link href={link.link} underline='none' key={link.text}>
                {link.text}
              </Link>
            ))
          }
        </Box>
      </Collapse>
    </Box>
  )
}

export default CollpaseLink;
