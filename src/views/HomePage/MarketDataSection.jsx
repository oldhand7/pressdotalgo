import React from 'react';
import Carousel from "react-multi-carousel";
import { makeStyles } from "@mui/styles";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import MarketTicketItem from 'components/MarketTicketItem';

import { marketData } from 'assets/mockdata/marketData';
import styles from 'assets/jss/pages/homePageStyles';

const useStyles = makeStyles(styles);

const MarketDataSection = () => {

  const classes = useStyles();

  const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 981 },
			items: 9
		},
		tablet: {
			breakpoint: { max: 980, min: 600 },
			items: 5
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 3
		}
	};

  return (
    <Box className={classes.marketDataSection} mx='auto' display='flex' position='relative'>
      <Button className={classes.marketTriggerBtn}>
        <ExpandMoreIcon />
      </Button>
      <Box className={classes.marketTicketWrapper}>
        <Carousel
          responsive={responsive}
          arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          containerClass="carousel-section"
        >
          {
            marketData.map((cell) => (
              <MarketTicketItem key={cell} data={cell} />
            ))
          }
        </Carousel>
      </Box>
    </Box>
  )
}

export default MarketDataSection;
