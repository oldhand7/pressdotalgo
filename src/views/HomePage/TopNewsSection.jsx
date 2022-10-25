import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SectionTitle from 'components/SectionTitle';
import ArticlePreviewTitle from 'components/ArticleCard/ArticlePreviewTitle';

import { mostPopularNewsData, recommendedVidoesData, mostPopularOpinionsData } from 'assets/mockdata/mostPopularData';
import styles from 'assets/jss/components/topNewsSectionStyles';

const useStyles = makeStyles(styles);

const TopNewsSection = (props) => {

  const { title } = props;
  const classes = useStyles();

  return (
    <Box className={classes.topNewsSection}>
      <Typography variant='h3' align='center' fontFamily='Times New Roman' className={classes.groupTitle}>
        {title}
      </Typography>
      <Box className={classes.topNewsSectionInner}>
        <Box className={clsx(classes.column, classes.firstColumn)}>
          <SectionTitle className={classes.sectionTitle}>
            Top Dots
          </SectionTitle>
          <ArticlePreviewTitle showBorderTop={true}>
          Crimea Bridge Explosion Disrupts Crucial Supply Route for Russian Forces
          </ArticlePreviewTitle>
          <Box>
            {
              mostPopularNewsData.map((data) => (
                <ArticlePreviewTitle key={data.id} link={data.link} showBorderTop={true}>
                  {data.text}
                </ArticlePreviewTitle>
              ))
            }
          </Box>
        </Box>
        <Box className={clsx(classes.column, classes.centerColumn)}>
          <SectionTitle className={classes.sectionTitle}>
            Hot Dots
          </SectionTitle>
          <Box>
            {
              recommendedVidoesData.map((data) => (
                <ArticlePreviewTitle key={data.id} link={data.link} showBorderTop={true}>
                  {data.title}
                </ArticlePreviewTitle>
              ))
            }
          </Box>
        </Box>
        <Box className={clsx(classes.column, classes.lastColumn)}>
          <SectionTitle sx={{ justifyContent: 'center' }}>
            Live Dots
          </SectionTitle>
          <Box>
            {
              mostPopularOpinionsData.map((data) => (
                <ArticlePreviewTitle key={data.id} link={data.link} showBorderTop={true}>
                  {data.text}
                </ArticlePreviewTitle>
              ))
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TopNewsSection;
