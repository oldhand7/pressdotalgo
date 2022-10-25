import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SectionTitle from 'components/SectionTitle';
import ArticleCard from 'components/ArticleCard';
import ArticlePreviewTitle from 'components/ArticleCard/ArticlePreviewTitle';
import styles from 'assets/jss/pages/homePageStyles';

const useStyles = makeStyles(styles);

const BottomNewsList = (props) => {

  const { data } = props;
  const classes = useStyles();

  return (
    <Box className={classes.bottomNewsWrapper}>
      <Typography variant='h3' align='center' fontFamily='Times New Roman' className={classes.groupTitle}>
        Categories
      </Typography>
      <Box className={classes.bottomNewsList} display='flex' flexWrap='wrap'>
        {
          data.map((group) => (
            <Box className={classes.bottomColumn} key={group.groupTitle.title}>
              <SectionTitle showBorderTop={true} link={group.groupTitle.link} sx={{ justifyContent: 'center' }}>
                {group.groupTitle.title}
              </SectionTitle>
              {
                group.children.map((card, index) => (
                  <ArticleCard key={`${group.groupTitle.title}-${index}`}>
                    <ArticlePreviewTitle link={card.title.link}>
                      {card.title.title}
                    </ArticlePreviewTitle>
                  </ArticleCard>
                ))
              }
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}

export default BottomNewsList;
