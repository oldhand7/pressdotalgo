import dotImg from 'assets/img/dot.png';

const articleCardStyles = ((theme) => ({
  articleCard: {
    borderBottom: '1px solid #eaeaea',
    paddingBottom: '20px',
    marginBottom: '20px'
  },
  lastCard: {
    borderBottom: '0 !important',
    paddingBottom: '0 !important',
    marginBottom: '0 !important'
  },
  articleTitle: {
    '& h3': {
      fontFamily: 'Times New Roman',
    },
    '& .MuiLink-root': {
      fontWeight: '700',
      color: '#333',      
      '&:hover': {
        color: '#0080c3',        
      },
      '& span': {
        paddingInlineEnd: '12px'
      }
    }
  },
  articlePreviewTitle: {
    paddingLeft: '30px !important',
    '& h3': {
      fontSize: '18px',
      lineHeight: '1.2',    
      position: 'relative',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',      
    },
    '& span': {
      fontSize: '14px',
      color: '#555',
      fontFamily: 'Times New Roman',
      marginRight: '12px'
    },
    '& .MuiLink-root': {
      fontWeight: '700',
      color: '#333',      
      '&:hover': {
        color: '#0080c3',        
      }     
    }, 
    '&::before': {
      position: 'absolute',
      width: '16px',
      height: '16px',
      content: `''`,
      backgroundColor: '#FF0000',
      borderRadius: '16px',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    [theme.breakpoints.down('lg')]: {
      '& h3': {
        fontSize: '18px',
        lineHeight: '22px'
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& h3': {
        fontSize: '22px',
        lineHeight: '24px'
      },
    },
  },
  showPreviewBorderTop: {
    padding: '16px 0',
    borderTop: '1px solid #eaeaea'
  },
  largeTitle: {
    '& h3': {
      fontSize: '36px',
      lineHeight: '36px'
    },
    [theme.breakpoints.down('lg')]: {
      '& h3': {
        fontSize: '22px',
        lineHeight: '24px'
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& h3': {
        fontSize: '36px',
        lineHeight: '36px'
      }
    }
  },
  normalTitle: {
    '& h3': {
      fontSize: '22px',
      lineHeight: '24px'
    },
    [theme.breakpoints.down('lg')]: {
      '& h3': {
        fontSize: '18px',
        lineHeight: '22px'
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& h3': {
        fontSize: '22px',
        lineHeight: '24px'
      },
    },
  },
  articleSummary: {
    '&.MuiTypography-root': {
      fontSize: '14pt',
      lineHeight: '20px',
      padding: '8px 0 0',
      wordBreak: 'break-word'
    },
    [theme.breakpoints.down('sm')]: {
      '&.MuiTypography-root': {
        fontSize: '16px',
        lineHeight: '22px'       
      }
    }
  },
  summaryText: {
    paddingInlineEnd: '12px'
  },
  stats: {
    display: 'inline-block',

  },
  commentCount: {
    '&.MuiLink-root': {
      display: 'inline-block',
      marginRight: '12px',
      fontSize: '11px',
      lineHeight: '15px',
      color: '#555',
      fontWeight: '300'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '16px',
      marginBottom: '-4px',
      marginRight: '5px',      
    }
  },
  timeToRead: {
    display: 'inline-block',
    '& .MuiSvgIcon-root': {
      fontSize: '16px',
      marginBottom: '-4px',
      marginRight: '5px',
      color: '#555',  
    },
    '& > span': {
      fontSize: '12px',
      color: '#555',
      lineHeight: '15px'
    }
  },
  bullets: {
    paddingBottom: '0',
    marginBottom: '0',
    margin: '0',
    display: 'block',
    paddingLeft: '0',
    listStyle: 'none',
    paddingTop: '10px',
    '& li': {
      backgroundSize: '13px 9px',
      backgroundPosition: '0 3px',
      backgroundRepeat: 'no-repeat',
      marginBottom: '7px',
      paddingLeft: '20px',
      backgroundImage: `url(${dotImg})`
    },
    '& li:last-child': {
      marginBottom: '0'
    },
    '& h4': {
      fontSize: '14pt',
      lineHeight: '18px'
    },
    [theme.breakpoints.down('sm')]: {
      '& h4': {
        fontSize: '16px',
        lineHeight: '22px'
      }
    }
  },
  articleType: {
    '&.MuiTypography-root': {
      fontSize: "13px",
      lineHeight: '14px',
      textTransform: 'uppercase',
      marginBottom: '4px'
    }    
  },
  articleVideo: {
    marginBottom: '12px',
    '& p': {
      fontSize: '13px',
      lineHeight: '18px',
      margin: '8px 0 12px'
    }
  },
  articleMedia: {
    marginBottom: '12px',
    '& .MuiCardMedia-root': {
      height: 'auto',
      width: '100%'
    }
  }
}));

export default articleCardStyles;
