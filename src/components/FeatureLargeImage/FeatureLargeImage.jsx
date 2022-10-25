import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import SectionTitle from 'components/SectionTitle';
import ArticleCard, { ArticleTitle, ArticleSummary, ArticleType, ArticleMedia } from 'components/ArticleCard';

import businessFeatureImg1 from 'assets/img/business-feature-1.jpg';

import styles from 'assets/jss/components/featureLargeImageStyles';

const useStyles = makeStyles(styles);

const FeatureLargeImage = (props) => {

  const { className } = props;
  const classes = useStyles();

  const classNames = clsx(
    classes.featureLargeImage,
    {
      [className]: className
    }
  )

  return (
    <Box className={classNames}>
      <SectionTitle
        link='https://www.wsj.com/news/business?mod=nav_top_section&mod=hp_lista_strap'
      >
        Business & Finance
      </SectionTitle>
      <Box className={classes.featureLargeImageInner}>
        <Box className={classes.leftColumn}>
          <ArticleCard hideBottomDivider={true}>
            <ArticleMedia
              image={businessFeatureImg1}
              link='https://www.wsj.com/articles/the-business-of-selling-toys-to-your-inner-child-11665201646?mod=hp_lista_pos1'
            />
            <ArticleTitle
              link='https://www.wsj.com/articles/the-business-of-selling-toys-to-your-inner-child-11665201646?mod=hp_lista_pos1'
              size='large'
            >
              The Business of Selling Toys to Your Inner Child
            </ArticleTitle>
            <ArticleSummary
              comment={{
                count: 22,
                link: 'https://www.wsj.com/articles/the-business-of-selling-toys-to-your-inner-child-11665201646?mod=hp_lista_pos1#comments_sector'
              }}
              timeToRead='8 min read'
            >
              From American Girl to Build-A-Bear,
              companies that cater to children are tailoring more products and marketing around adult consumers who want toys for themselves
            </ArticleSummary>
          </ArticleCard>
        </Box>
        <Box className={classes.rightColumn}>
          <ArticleCard>
            <ArticleTitle
              size='medium'
              link='https://www.wsj.com/articles/how-the-inspire-brands-ceo-learned-to-care-about-company-culture-11665201612?mod=hp_lista_pos2'
            >
              How the Head of Arby’s and Dunkin’ Learned to Care About Company Culture
            </ArticleTitle>
            <ArticleSummary
              comment={{
                count: 10,
                link: 'https://www.wsj.com/articles/the-business-of-selling-toys-to-your-inner-child-11665201646?mod=hp_lista_pos1#comments_sector'
              }}
              timeToRead='8 min read'
            >
              Inspire Brands CEO Paul Brown says his time at Hilton taught him that brand identity trumps an operating manual.
            </ArticleSummary>
          </ArticleCard>
          <ArticleCard>
            <ArticleTitle
              size='medium'
              link='https://www.wsj.com/articles/how-the-inspire-brands-ceo-learned-to-care-about-company-culture-11665201612?mod=hp_lista_pos2'
            >
              How the Head of Arby’s and Dunkin’ Learned to Care About Company Culture
            </ArticleTitle>
            <ArticleSummary
              comment={{
                count: 10,
                link: 'https://www.wsj.com/articles/the-business-of-selling-toys-to-your-inner-child-11665201646?mod=hp_lista_pos1#comments_sector'
              }}
              timeToRead='8 min read'
            >
              Inspire Brands CEO Paul Brown says his time at Hilton taught him that brand identity trumps an operating manual.
            </ArticleSummary>
          </ArticleCard>
          <ArticleCard hideBottomDivider={true}>
            <ArticleType>
            HEARD ON THE STREET
            </ArticleType>
            <ArticleTitle
              size='medium'
              link='https://www.wsj.com/articles/how-the-inspire-brands-ceo-learned-to-care-about-company-culture-11665201612?mod=hp_lista_pos2'
            >
              How the Head of Arby’s and Dunkin’ Learned to Care About Company Culture
            </ArticleTitle>
            <ArticleSummary
              comment={{
                count: 10,
                link: 'https://www.wsj.com/articles/the-business-of-selling-toys-to-your-inner-child-11665201646?mod=hp_lista_pos1#comments_sector'
              }}
              timeToRead='8 min read'
            >
              Inspire Brands CEO Paul Brown says his time at Hilton taught him that brand identity trumps an operating manual.
            </ArticleSummary>
          </ArticleCard>
        </Box>
      </Box>
    </Box>
  )
}

export default FeatureLargeImage;
