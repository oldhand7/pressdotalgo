const badBetsStyles = ((theme) => ({
  badBetsSection: {
    borderBottom: '1px solid #ccc',
    marginBottom: '20px',
    paddingBottom: '20px',
    paddingTop: '10px',
    [theme.breakpoints.down('lg')]: {
      display: 'block !important'
    }
  },
  textBox: {
    width: '220px',
    '& h2': {
      fontSize: '24px',
      lineHeight: '23px',
      margin: '0 0 10px'
    },
    '& p': {
      fontSize: '13px',
      lineHeight: '16px',
      paddingRight: '10px'
    },
    '& a': {
      fontFamily: 'Times New Roman',
      marginTop: '5px',
      marginBottom: '13px',
      display: 'block',
      color: '#0080c3',
      fontSize: '13px'
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      marginBottom: '20px',
      borderBottom: '1px solid #eaeaea'
    }
  },
  playerBox: {
    width: '100%'
  },
  audioPlayerInner: {
    boxSizing: 'border-box',
    color: '#222',
    height: '100%',
    '& > .MuiBox-root:nth-of-type(2)': {
      flex: '1 1 auto',
      paddingLeft: '15px'
    },
    '& > .MuiBox-root:last-of-type': {
      flex: '0 0 95px',      
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'space-beetween',
      '& > .MuiBox-root:nth-of-type(2)': {       
        paddingLeft: '0',
        paddingTop: '15px'
      },
    }
  },
  audioTitle: {
    '&.MuiLink-root': {
      fontFamily: 'Times New Roman',
      fontSize: '18px',
      lineHeight: '20px',
      color: '#222',
      minHeight: '22px',
      paddingRight: '10px',
      display: 'block',
      verticalAlign: 'top'
    }
  },
  audioDesc: {
    '&.MuiTypography-root': {
      fontSize: '14px',
      lineHeight: '20px',
      marginTop: '10px',
      minHeight: '30px',
      overflow: 'hidden',
      paddingRight: '10px'
    },
    '& .MuiLink-root': {
      color: '#0274b6',
      marginLeft: '5px'
    }
  },
  audioSubscribe: {
    width: 'auto',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    '& > p': {
      fontSize: '13px',
      lineHeight: '13px',
      marginBottom: '5px',
      textTransform: 'uppercase'
    }
  },
  audioSubscribeFeaturedLinks: {
    '& .MuiLink-root': {
      display: 'block',
      fontSize: '12px',
      fontWeight: '350',
      lineHeight: '17px',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
  dropdown: {
    '&.MuiButtonBase-root': {
      marginTop: '5px',
      borderColor: '#ccc',
      borderRadius: '5px',
      width: '70px',
      padding: '0',
      height: '35px',
      color: '#666',
      fontSize: '11px',
      lineHeight: '22px'
    }   
  },
  dropdownLinkInner: {
    borderBottom: '1px solid #ccc',
    boxSizing: 'border-box',
    lineHeight: '50px',
    marginLeft: '15px',
    '& img': {
      marginRight: '12px'
    }
  },
  dropdownContent: {
    width: '200px',
    '& .MuiLink-root': {
      color: '#666 !important',
      display: 'block',
      fontSize: '15px',
      fontWeight: '350',
      '&:hover': {
        backgroundColor: '#f4f4f4',
        color: '#333!important'
      }
    }
  },
  controlsContainer: {
    display: 'block'
  },
  audioControls: {
    margin: '10px 0',
    // height: '50px',   
    fontSize: '13px',
    '& .rhap_container': {
      boxShadow: 'none',
      padding: '0'
    },  
    '& .rhap_play-pause-button': {
      color: 'rgb(34, 34, 34)',
      width: '48px',
      height: '48px',
      '& svg': {
        width: '100%',
        height: '100%'
      }
    }    
  },
  playerCenter: {
    [theme.breakpoints.down('sm')]: {
      order: '1'
    }
  }
}));

export default badBetsStyles;
