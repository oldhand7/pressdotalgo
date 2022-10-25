const homePageStyles = ((theme) => ({
  leftColumn: {
    width: '928px',
    verticalAlign: 'top',
    display: 'table-cell',
    paddingRight: '16px',
    boxSizing: 'content-box',
    [theme.breakpoints.down('lg')]: {
      width: '607px',
      paddingRight: '0'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'block'
    }
  },
  rightColumn: {
    width: '300px',
    verticalAlign: 'top',
    display: 'table-cell',
    paddingLeft: '16px',
    boxSizing: 'content-box',
    borderLeft: '1px solid #eaeaea',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'block',
      paddingLeft: '0',
      borderLeft: '0'
    }
  },
  spacingBorderTop: {
    borderTop: '1px solid #555',
    paddingTop: '20px'
  },
  contentsInner: {
    // paddingTop: '20px',
    // borderTop: '1px solid #eaeaea',
    width: '100%',
    display: 'table',
    tableLayout: 'fixed',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  featuredStripSection: {
    '& .section-title': {
      fontSize: '40pt',
      lineHeight: '1.2',
      justifyContent: 'center'
    },
    [theme.breakpoints.down('md')]: {
      '& .section-title': {
        fontSize: '25pt'
      }
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  thirdColumn: {
    width: 'calc((100% - 64px) / 3)'
  },
  bottomNewsList: {
    '& .MuiBox-root:first-of-type': {
      paddingLeft: '0'
    },
    '& .MuiBox-root:nth-of-type(5n)': {
      paddingLeft: '0'
    },
    '& .MuiBox-root:nth-of-type(4n)': {
      paddingRight: '0'
    },
    [theme.breakpoints.down('lg')]: {
      '& .MuiBox-root:nth-of-type(4n)': {
        paddingLeft: '0',
        paddingRight: '16px'
      },
      '& .MuiBox-root:nth-of-type(3n)': {
        paddingRight: '0'
      },
      '& .MuiBox-root:nth-of-type(5n)': {
        paddingLeft: '16px'
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      marginRight: '0'
    }
  },
  bottomColumn: {
    '&.MuiBox-root': {
      width: 'calc((100% - 96px) / 4)',
    },    
    marginBottom: '20px',
    paddingLeft: '16px',
    paddingRight: '16px',
    '& .article-card-title': {
      '& h3': {
        fontSize: '14pt',
        lineHeight: '18px',
        fontFamily: 'Times New Roman'
      }
    },
    '& .article-card:last-child': {
      marginBottom: '0',
      borderBottom: '0'
    },
    [theme.breakpoints.down('lg')]: {
      '&.MuiBox-root': {
        width: 'calc((100% - 64px) / 3)',
      },       
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
      width: '100%',
      '&.MuiBox-root': {
        width: '100%',
      },   
      '& .article-card-title': {
        '& h3': {
          fontSize: '17px !important',
          lineHeight: '21px !important'
        }
      },
    }
  },
  mostPopularNews: {
    [theme.breakpoints.down('md')]: {
      width: 'calc((100% - 32px) / 2)'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  recommendedVideos: {
    paddingTop: '24px',
    [theme.breakpoints.down('md')]: {
      width: 'calc((100% - 32px) / 2)'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  groupTitle: {
    '&.MuiTypography-root': {
      fontSize: '40pt',
      textTransform: 'none',
      margin: '24px 0 16px'
    },
    [theme.breakpoints.down('md')]: {
      '&.MuiTypography-root': {
        fontSize: '25pt'
      },
    }
  }, 
  searchBar: {
    '& .MuiInputBase-root': {
      borderRadius: '28px',
      height: '45px'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '16px'
    }
  }
}));

export default homePageStyles;
