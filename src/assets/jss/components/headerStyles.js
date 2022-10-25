const headerStyles = ((theme) => ({
  header: {
    borderBottom: '1px solid #ccc',
    fontFamily: 'Times New Roman'
  },
  logoWrapper: {
    paddingTop: '10px',
    '& a': {
      color: '#000',
      display: 'block',
      fontSize: '80px',
      fontWeight: "bold",
      fontFamily: 'Univers',
      margin: '0 auto 10px',  
      lineHeight: '1.2'
    }
  },
  customerNav: {
    fontSize: '12px',
    lineHeight: '12px',
    color: '#555',
    height: '50px',
    right: '10px',
    top: '14px'
  },
  customerNavContainer: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    '& > a': {
      paddingTop: '6px',
      paddingBottom: '6px',
      color: '#555',
      '&:hover': {
        color: '#0080c3'
      }
    },
    '& > a:first-child': {      
      borderRight: '1px solid #ccc',
      paddingRight: '8px',
      position: 'relative',
      right: '8px',
      lineHeight: '16px',
      minWidth: '80px'
    }
  },
  navPromoBottom: {
    marginTop: '6px',
    '& > a': {
      color: 'rgb(78, 105, 178)',
      fontSize: '14px',
      fontWeight: '500',
      height: '20px',
      textTransform: 'uppercase',
      paddingTop: '10px',
      boxSizing: 'border-box'
    }
  },
  mastheadStrap: {
    fontWeight: '300',
    marginBottom: '7px',
    '& > .MuiBox-root:not(:last-child)': {
      paddingRight: '9px',
      borderRight: '1px solid #ccc',
      marginRight: '10px'      
    },
    '& .MuiLink-root': {
      color: '#555',
      paddingTop: '6px',
      paddingBottom: '6px',
      fontSize: '30pt',      
    }
  },
  editionDropdown: {
    paddingRight: '0 !important',
    '& .MuiSelect-select': {
      paddingTop: '0 !important',
      paddingBottom: '0 !important'
    }
  },
  navContainer: {
    position: 'relative',
    height: '33px',
    lineHeight: '24px',
    zIndex: '40',
    fontFamily: 'Times New Roman',
    '& > ul': {
      margin: '0 auto',
      display: 'inline-block',
      paddingLeft: '0',
      listStyle: 'none',      
    },
    [theme.breakpoints.down('lg')]: {
      '& > ul': {
        marginLeft: '-40px'
      }
    }
  },
  topMenuItem: {
    textTransform: 'capitalize',
    fontWeight: '400',
    fontSize: '14px',
    float: 'left',
    color: '#333',
    boxSizing: 'border-box',
    border: '1px solid transparent',
    height: '34px',
    '&:hover > .MuiBox-root': {
      display: 'block'
    },    
  },
  hasSubMenu: {
    '&:hover': {
      background: 'rgb(249, 249, 249)',
      borderTop: '1px solid rgb(204, 204, 204)',
      borderRight: '1px solid rgb(204, 204, 204)',
      borderLeft: '1px solid rgb(204, 204, 204)',
      borderImage: 'initial'
    }
  }, 
  sectionLink: {
    '&.MuiLink-root': {
      color: '#555',
      display: 'block',
      padding: '3px 8.8px 0',
      fontSize: '14px',
      fontWeight: '400',
      '&:hover': {
        color: 'rgb(34, 34, 34)',
        fontWeight: '500'
      }
    },
    [theme.breakpoints.down('lg')]: {
      '&.MuiLink-root': {
        padding: '3px 6px 0'
      }
    }
  },
  subSection: {
    padding: '20px',
    width: '100%',
    left: '0',
    display: 'none',
    background: '#f9f9f9',
    top: '34px',
    boxSizing: 'border-box',
    borderBottom: '1px solid #ccc'
  },
  subSectionInner: {
    width: '790px',
    left: '50%',
    marginLeft: '-338px',
    overflow: 'hidden',
    paddingBottom: '20px',
    '& > .MuiBox-root:last-child': {
      borderRight: '0 !important'
    }
  },
  subSectionItem: {
    fontSize: '12px',
    lineHeight: '19px',    
    width: '200px',  
    paddingLeft: '20px',
    '& ul': {
      listStyle: 'none',
      paddingLeft: '0'
    },
    '& li': {
      margin: '10px 0',      
    },
    '& a': {
      color: '#555'      
    }
  },
  subSectionColumn: {
    borderRight: '1px solid #ccc',
    '& .MuiBox-root:not(:first-child)': {
      paddingTop: '30px'
    }
  },
  searchBtn: {
    zIndex: '50',
    position: 'relative',
    '& .MuiButtonBase-root': {
      width: '80px',
      position: 'absolute',
      top: '-35px',
      right: '12px',
      height: '35px',
      padding: '0',
      border: '0',
      textTransform: 'none',
      color: 'rgb(51, 51, 51)',
      fontWeight: '400',
      fontSize: '11px'
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '980px !important',
      '& .MuiButtonBase-root': {
        width: '35px',
        minWidth: 'unset'
      },
      '& .label': {
        display: 'none'
      }
    }
  },
  mobileHeader: {

  },
  mobileHeaderInner: {
    borderBottom: '1px solid #cfd7d7',
    padding: '13px 0',
    height: "auto",
    '& .MuiIconButton-root': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '10px'
    }
  },
  mobileHeaderLogo: {
    '& a': {
      position: 'relative',
      display: 'inline-block',
      margin: '0 auto',
      color: '#000',
      fontSize: '24px',
      lineHeight: '1.2',
      fontWeight: 'bold',
      fontFamily: 'Univers'
    },
    '& img': {
      width: '200px'
    }
  },
  mobileLoginBtns: {
    padding: '6px 0 10px',
    '& > .MuiBox-root': {
      width: 'calc(50% - 15px)',
      padding: '0 5px'
    },
    '& .MuiButtonBase-root': {
      height: '35px',
      fontSize: '13px'
    }
  },
  stickyHeader: {
    background: '#fff'
  },
  stickyBar: {
    visibility: 'hidden',
    transform: 'translateY(-69px)',
    transition: '.5s cubic-bezier(.2,1,.3,1)',
    background: '#fff',
    borderBottom: '1px solid #ccc',
    left: '0',
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '70',
    height: '70px',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      borderBottom: '0'
    }
  },
  showStickyBar: {
    visibility: 'visible',
    transform: 'translateY(0)',
  },
  stickyLogoWrapper: {
    height: 'unset',
    '& .MuiLink-root': {
      fontSize: '50px',
      paddingTop: '12px'
    },    
  },
  stickyCustomNav: {
    height: '20px'
  }
}));

export default headerStyles;
