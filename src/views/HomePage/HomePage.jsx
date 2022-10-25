import React from 'react';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';

import CustomContainer from 'components/CustomContainer';
import TopNewsSection from './TopNewsSection';
import FeaturedStripSection from './FeaturedStripSection';
import BottomNewsList from './BottomNewsList';

import bottomNews from 'assets/mockdata/bottomNews';

import styles from 'assets/jss/pages/homePageStyles';

const useStyles = makeStyles(styles);

const HomePage = () => {

	const classes = useStyles();

	return (
		<Box>
			<Box>
				<CustomContainer>
					<TopNewsSection title='Words' />
					<TopNewsSection title='Voices' />
					<TopNewsSection title='Videos' />

					<FeaturedStripSection />

					<Box className={classes.contentsInner}>
						<BottomNewsList data={bottomNews} />
					</Box>				
				</CustomContainer>
			</Box>
		</Box>
	)
}

export default HomePage;
