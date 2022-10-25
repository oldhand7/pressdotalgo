const footerStyles = ((theme) => ({
  footerWrapper: {
    backgroundColor: '#f4f4f4',
    fontFamily: 'Times New Roman',
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#fff',
      color: '#555',
      borderTop: '1px solid #ccc',
      fontSize: '15px',
      fontFamily: 'Times New Roman'
    }
  },
  topLinksWrapper: {
    backgroundColor: '#e9e9e9',
    marginBottom: '30px',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  topLinks: {
    height: '44px',
    position: 'relative',
    listStyle: 'none',
    padding: '0',
    boxSizing: 'border-box',
    display: 'block',
    '& > li': {
      float: 'left'
    }
  },
  logo: {
    margin: '11.5px 18px 0 4px',
    '& a': {
      color: 'inherit',
      width: '243px',
      display: 'block',
      fontWeight: 'bold',
      fontFamily: 'Univers',  
      fontSize: '22px',
      lineHeight: '1.2'
    }
  },
  editionDropdown: {
    margin: '13px 14px 0'
  },
  loginSub: {
    float: 'right !important',
    lineHeight: '44px',
    '& ul': {
      padding: '0',
      margin: '0',
      lineHeight: '44px',
      listStyle: 'none',
      display: 'block'
    }
  },
  subscribeBtn: {
    lineHeight: '44px',
    display: 'inline-block',
    '& a': {
      fontSize: '12px',
      fontWeight: '500',
      color: '#000',
      paddingRight: '15px',
      marginRight: '15px'
    }
  },
  loginBtn: {
    lineHeight: '44px',
    display: 'inline-block',
    '& a': {
      fontSize: '12px',
      fontWeight: '500',
      color: '#000',
    }
  },
  backTopBtn: {
    position: 'absolute',
    top: '-30px',
    right: '0',
    '& .MuiButtonBase-root': {
      display: 'block',
      padding: '0 10px',
      height: '30px',
      border: 'none',
      fontFamily: 'Times New Roman',
      fontSize: '11px',
      fontWeight: '500',
      color: '#fff',
      backgroundColor: '#bbb !important',
      borderRadius: '0'
    }
  },
  backToTopIcon: {
    transform: 'rotate(90deg)',
    display: 'inline-block',
    marginLeft: '4px',
    fontSize: '12px'
  },
  linksSection: {
    '& .MuiContainer-root': {
      paddingLeft: '0 !important',
      paddingRight: '0 !important'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  linksBox: {    
    width: '19.8%',
    fontFamily: 'Times New Roman',
    height: 'fit-content',
    '& p': {
      paddingLeft: '16px',
      marginBottom: '12px'
    },
    '& ul': {
      margin: '0',
      listStyle: 'none',
      paddingLeft: '16px',
      '& li': {
        marginBottom: '12px',
        lineHeight: '12px'
      },
      '& li:last-child': {
        marginBottom: '0'
      }
    }
  },
  socialLinks: {
    margin: '16px auto 10px',
    display: 'block',
    width: '555px',
    height: '50px',
    listStyle: 'none',
    padding: '0',
    '& li': {
      margin: '9px 20px 0 0',
      float: 'left',
      '& a': {
        marginTop: '5px',
        color: '#000',
        display: "block",
      }
    }
  },
  googlePlayLink: {
    backgroundImage: 'url(https://vir.wsj.net/fp/assets/webpack4/img/google-play.4699f3c2.svg)',
    width: '72px',
    backgroundSize: '64px'  
  },
  appStoreLink: {
    width: '80px',
    backgroundSize: '67px',
    backgroundImage: 'url(https://vir.wsj.net/fp/assets/webpack4/img/appstore.a6e93ba3.svg)'
  },
  badgeLink: {
    backgroundColor: '#222',
    backgroundRepeat: 'no-repeat',
    borderRadius: '3px',
    height: '25px',
    marginTop: '4px',
    display: "block",
    backgroundPosition: '50%'
  },
  productSection: {
    fontSize: "12px",
    backgroundColor: '#e9e9e9',
    fontFamily: 'Times New Roman'
  },
  productsInnder: {
    padding: '20px 0 10px',
    width: '905px',
    fontSize: "12px",
    fontFamily: 'Times New Roman',
    '& p': {
      display: 'inline',
      marginRight: '35px'
    },
    '& ul': {
      display: 'inline',
      padding: '0',
      listStyle: 'none',
      textAlign: 'center'
    },
    '& li': {
      display: 'inline-block',
      borderRight: '1px solid #ccc',
      marginRight: '10px',
      paddingRight: '10px',
      marginBottom: '10px'
    }   
  },
  noBorder: {
    borderRight: '0 !important'
  },
  copyInoSection: {
    '&.MuiContainer-root': {
      padding: '0 !important'
    },
    '& ul': {
      height: '115px',
      fontSize: "14px",
      textAlign: 'center',
      paddingBottom: '50px',
      paddingLeft: '0',
      marginTop: '5px',
      marginLeft: '10px',
      marginRight: '10px',
      boxSizing: 'border-box',
      display: 'block',
      fontFamily: 'Times New Roman',
      marginBottom: '0'
    },
    '& li': {
      lineHeight: '38px',
      display: 'inline-block'
    },
    '& a': {
      borderRight: '1px solid #e9e9e9',
      paddingRight: '8px',
      marginRight: '8px',
      '&:hover': {
        color: '#0274b6'
      }
    }
  },
  copyInfo: {
    lineHeight: '12px !important',
    display: 'block !important',
    fontSize: "14px",
    color: '#000 !important',
    '& a': {
      paddingRight: '0 !important',
      marginRight: '0 !important',
      border: '0 !important'
    }
  },
  mobileBackToTop: {
    backgroundColor: '#f4f4f4',
    padding: '20px 0',    
  },
  mobileBox: {
    '&.MuiBox-root': {
      padding: '0 20px',
      maxWidth: '414px',
      boxSizing: 'border-box'
    }
  },
  mobileLang: {
    margin: '20px 0',
    '& .MuiFormLabel-root': {
      fontSize: "13px",
      marginBottom: '5px',
      display: 'block',
      color: '#555',
      fontFamily: 'Times New Roman'
    },
    '& .MuiInputBase-root': {
      color: '#555',
      fontSize: '14px',
      height: '45px',
      background: '#f4f4f4',
      borderRadius: '0',
      fontFamily: 'Times New Roman'
    },
    '& .MuiOutlinedInput-notchedOutline': {      
      border: '0'
    },
    '& .MuiSelect-select': {      
      padding: '0 0 2px 10px',      
    }
  },
  mobileSocialLinks: {
    marginBottom: '30px',
    display: 'flex',
    margin: '0 auto',
    listStyle: 'none',
    paddingLeft: '0',
    justifyContent: 'center',
    '& li': {
      margin: '9px 14px 0 15px',
      display: 'list-item'
    },
    '& a': {
      color: '#555'
    }
  },
  footerAbout: {
    marginBottom: '30px',
    '& a': {
      fontSize: '15px',
      marginBottom: '15px',
      display: 'block',
      textAlign: 'center',
      color: '#555',
      '&:hover': {
        color: '#999'
      }
    }
  },
  mobileBadgeLinks: {
    marginBottom: '20px',
    '& ul': {
      width: '100%',
      display: 'table',
      margin: '0 auto',
      listStyle: 'none',
      paddingLeft: '0 !important',
    },
    '& li': {
      width: 'calc(50% - 4.5px)',
      margin: '0',
      float: 'left',
      display: 'list-item',
      listStyle: 'none',
    },
    '& li:first-child': {
      marginRight: '9px'
    },
    '& a': {
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#333',
      backgroundSize: '105px',
      borderRadius: '5px',
      marginTop: '4px',
      display: 'block',
      height: "43px",
      backgroundPosition: '50%'
    }
  },
  mobileGooglePlay: {
    backgroundImage: 'url(https://vir.wsj.net/fp/assets/webpack4/img/google-play.4699f3c2.svg)'
  },
  mobileAppStore: {
    backgroundImage: 'url(https://vir.wsj.net/fp/assets/webpack4/img/appstore.a6e93ba3.svg)'
  },
  mobileCopyInfo: {
    '& p': {
      marginBottom: '10px'
    },
    '& a': {
      color: '#555',
      '&:hover': {
        color: '#999'
      }
    }
  }
}));

export default footerStyles;
