const topNewsSectionStyles = ((theme) => ({
  topNewsSection: {
    marginBottom: '20px'
  },
  topNewsSectionInner: {
    display: 'table',
    margin: '0 auto',
    tableLayout: 'fixed',
    width: '100%'
  },
  firstColumn: {
    paddingLeft: '0 !important',
    width: '100%'   
  },
  centerColumn: {
    width: '100%',
    borderLeft: '1px solid #eaeaea',
    borderRight: '1px solid #eaeaea'
  },
  lastColumn: {
    paddingRight: '0 !important',
    width: '100%'   
  },
  column: {
    display: 'table-cell',
    padding: '0 16px',
    boxSizing: 'content-box',
    verticalAlign: 'top',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '100%',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
      borderLeft: '0',
      borderRight: '0',
      marginBottom: '24px'
    }
  },
  articleCardWrapper: {
    width: '287px',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      display: 'block',
      paddingLeft: '0',
      paddingRight: '0'
    },
    [theme.breakpoints.down('sm')]: {
      '& .article-card-title': {
        '& h3': {
          textAlign: 'center'
        }
      },
    }
  },
  bottomArticle: {
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid #eaeaea'
  },
  videoCard: {
    [theme.breakpoints.down('lg')]: {
      '& .article-card-video': {
        '& iframe': {
          height: '205px'
        }
      },
      '& .article-card-title': {
        '& h3 a': {
          fontWeight: '400'
        }
      },
      '& .article-card-summary': {
        textAlign: 'left'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& .article-card-title': {
        '& h3': {
          fontWeight: '400',
          fontSize: '22px',
          lineHeight: '24px'
        }
      },
    }
  },
  articleMargin: {
    [theme.breakpoints.down('lg')]: {
      marginBottom: '40px'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
      paddingBottom: '20px',
      borderBottom: '1px solid #eaeaea'
    }
  },
  sectionTitle: {
    '&.MuiTypography-root': {
      fontSize: '20pt',
      justifyContent: 'center'
    }
  }
}));

export default topNewsSectionStyles;
