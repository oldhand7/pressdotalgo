import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import styles from 'assets/jss/components/recommendedVideoStyles';

const useStyles = makeStyles(styles);

const RecommendedVideo = (props) => {

  const { data } = props;
  const classes = useStyles();

  return (
    <Link href={data.link} underline='none' className={clsx(classes.recommendedVideo)}>
      <Typography variant='body1' className={classes.mark} color='#555' fontWeight={600} fontSize={30} lineHeight='34px'>
        {data.id}
      </Typography>
      <Box className={classes.text} width='100%' display='flex' alignItems='center' position='relative'>
        <Box className={classes.headline} display='flex' alignItems='center'>
          <Typography variant='h3' fontFamily='Times New Roman' color='#222' fontWeight={600}>
            {data.title}
          </Typography>
        </Box>
      </Box>
    </Link>
  )
}

export default RecommendedVideo;
