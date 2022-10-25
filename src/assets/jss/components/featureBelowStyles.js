const featureBelowStyles = ((theme) => ({
  featureBelow: {
    marginBottom: '40px'
  },
  featureBelowContents: {
    display: 'flex',  
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'space-between'
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    }
  },
  column: {
    width: 'calc((100% - 64px) / 3)',
    marginRight: '32px',
    [theme.breakpoints.down('lg')]: {
      width: 'calc(50% - 16px)',
      marginRight: '0px',
    },
    [theme.breakpoints.down('sm')]: {
      
      width: '100%'
    }
  },
  adItem: {
    minWidth: '100%',
    minHeight: '250px',
    transition: 'height .7s ease-in-out',
    width: '100%',
    height: '100%',
    background: '#ccc',
    '& iframe': {
      width: '100%',
      height: '100%'
    },
    [theme.breakpoints.down('lg')]: {
      height: '400px'
    }
  },
  twoCardInLg: {
    '& .article-card:nth-of-type(2)': {
      display: 'none',
      [theme.breakpoints.down('lg')]: {
        display: 'block'
      }
    },
    [theme.breakpoints.down('lg')]: {
      '& .article-card:nth-of-type(2)': {
        paddingTop: '20px',
        marginTop: '20px',
        borderTop: '1px solid #eaeaea'
      }
    },
    [theme.breakpoints.down("sm")]: {
      '& .article-card:nth-of-type(2)': {
        display: 'none !important'
      },
      '& .article-card:nth-of-type(1)': {
        paddingBottom: '20px !important',
        marginBottom: '20px !important',
        borderBottom: '1px solid #eaeaea !important'
      }
    }
  },
  showOnPcSm: {
    '& .article-card-media': {
      display: 'none'
    },
    [theme.breakpoints.down("lg")]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      '& .article-card:nth-of-type(1)': {
        paddingTop: '20px !important',
        marginTop: '20px !important',
        borderTop: '1px solid #eaeaea !important'
      },
      '& .article-card': {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        borderRight: '0 !important'
      },
      '& .article-card-title': {
        width: '100%'
      },
      '& .article-card-media': {        
        maxWidth: '45%',
        display: 'block !important',
        order: '1',
        marginLeft: '10px',
        marginTop: '10px',
        marginBottom: '0'
      },
      '& .article-card-summary': {
        flex: '1'
      },
      '& .article-card:first-of-type': {
        paddingBottom: '20px',
        marginBottom: '20px',
        borderBottom: '1px solid #eaeaea'
      },
    }
  }
}));

export default featureBelowStyles;
