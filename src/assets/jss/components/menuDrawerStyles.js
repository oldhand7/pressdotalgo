const menuDrawerStyles = ((theme) => ({
  drawer: {
    '& .MuiDrawer-paper': {
      width: '100vw'
    }
  },
  head: {
    borderBottom: '1px solid #cfd7d7',
    padding: '13px 0',
    height: "24px",
    '& .MuiIconButton-root': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',    
    }
  },
  headLogo: {
    '& a': {
      width: '275px',
      position: 'relative',
      display: 'inline-block',
      height: '24px',
      margin: '0 auto',
      opacity: '0.5',
      fontSize: '24px',
      lineHeight: '1.2',
      color: '#000',
      fontWeight: "bold",
      textAlign: 'center',
      fontFamily: "Univers"
    }
  },
  searchBtn: {
    '&.MuiIconButton-root': {    
      right: '10px'
    }
  },
  toggleBtn: {
    '&.MuiIconButton-root': {    
      left: '10px'
    }
  },
  drawerContents: {
    top: '51px',
    height: 'calc(100% - 51px)',
    opacity: '1',
    zIndex: '1002',
    left: '0',
    width: '100%',
    fontSize: '14px',
    '& .MuiTabs-flexContainer': {
      display: 'block',
      '& .MuiTab-root': {
        width: '50%',
        maxWidth: 'unset',
        backgroundColor: '#f4f4f4',
        borderBottom: '1px solid #ccc',
        padding: '14px 10px',
        color: '#555',
        textTransform: 'none',
        lineHeight: '1.5'
      },      
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#333'
    }
  }, 
  tabContents: {
    height: '85%',
    overflow: 'auto',
    '& .MuiTabPanel-root': {
      padding: '0'
    }
  },
  sectionsContents: {
    padding: '10px 20px'
  },
  topLinks: {
    '& .MuiLink-root': {
      display: 'block',
      padding: '5px 0',
      lineHeight: '22px',
      fontSize: '14px',
      paddignRight: '10px',
      width: '50%',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
  collapseLink: {
    borderTop: '1px solid #e0e0e0',
    '& .MuiButtonBase-root': {
      color: '#333',
      paddingBottom: '10px',
      paddingLeft: '0',
      paddingTop: '15px',
      fontSize: '15px',
      lineHeight: '1.5',
      fontFamily: 'Times New Roman',
      borderRadius: '0',      
      '& .MuiSvgIcon-root': {
        fontSize: '20px'
      }
    }
  },
  subLinks: {
    '& .MuiLink-root': {
      paddingRight: '10px',
      paddingTop: '5px',
      paddingBottom: '5px',
      color: '#555',
      width: '50%',
      display: 'block',
      boxSizing: 'border-box',
      lineHeight: '22px',
      fontSize: '14px',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
  accountContents: {    
    padding: '0 20px'    
  },
  accountContentsInner: {
    height: '70%',
    minHeight: '600px',
    maxWidth: '560px',
    overflow: 'auto'
  },
  adContainer: {
    padding: '30px 0',
    '& img': {
      display: 'block',
      boxSizing: 'border-box',
      margin: '0 auto',
      padding: '20px',
      width: '100%',
      maxWidth: '200px'
    }
  },
  actionsContainer: {
    maxWidth: '360px',
    margin: '0 auto 50px',
    width: '100%',
    '& .MuiButtonBase-root': {
      fontWeight: '400'
    }
  }
}));

export default menuDrawerStyles;
