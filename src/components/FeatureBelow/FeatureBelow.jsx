import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import SectionTitle from 'components/SectionTitle';
import ArticleCard, { ArticleTitle, ArticleSummary, ArticleMedia } from 'components/ArticleCard';

import styles from 'assets/jss/components/featureBelowStyles';

const useStyles = makeStyles(styles);

const FeatureBelow = (props) => {

  const { data } = props;
  const classes = useStyles();

  return (
    <Box className={classes.featureBelow}>
      <SectionTitle link={data.groupTitle.link} showBorderTop={true}>
        {data.groupTitle.title}
      </SectionTitle>
      <Box className={classes.featureBelowContents}>
        <Box className={clsx(classes.column, classes.twoCardInLg)}>
          <ArticleCard hideBottomDivider={true}>
            <ArticleMedia
              image={data.mainData.card.media.image}
              link={data.mainData.card.media.link}
            />
            <ArticleTitle
              size='medium'
              link={data.mainData.card.title.link}
            >
              {data.mainData.card.title.title}
            </ArticleTitle>
            <ArticleSummary
              timeToRead='4 min read'
              comment={{
                count: data.mainData.card.summary.comment.count,
                link: data.mainData.card.summary.comment.link
              }}
            >
              {data.mainData.card.summary.text}
            </ArticleSummary>
          </ArticleCard>
          <ArticleCard hideBottomDivider={true}>
            <ArticleTitle
              size='medium'
              link={data.subData.cardList[0].title.link}
            >
              {data.subData.cardList[0].title.title}
            </ArticleTitle>
            <ArticleSummary
              timeToRead='4 min read'
              comment={data.subData.cardList[0].summary.comment}
            >
              {data.subData.cardList[0].summary.text}
            </ArticleSummary>
          </ArticleCard>
        </Box>
        <Box className={clsx(classes.column, classes.showOnPcSm)}>
          {
            data.subData.cardList.map((card, index) => (
              <ArticleCard hideBottomDivider={index === 1} key={`${card.title.title}-${index}`}>
                <ArticleMedia
                  image={card.media.image}
                  link={card.media.link}
                />
                <ArticleTitle
                  size='medium'
                  link={card.title.link}
                >
                  {card.title.title}
                </ArticleTitle>
                <ArticleSummary
                  timeToRead='4 min read'
                  comment={card.summary.comment}
                >
                  {card.summary.text}
                </ArticleSummary>
              </ArticleCard>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default FeatureBelow;
