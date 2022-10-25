const searchDialogStyles = ((theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      margin: '0',
      width: '100vw',
      height: '100vh',
      maxWidth: 'unset',
      maxHeight: 'unset'
    }
  },
  closeBtn: {
    position: 'absolute !important',
    top: '50px',
    right: '80px'
  },
  pcSearchBox: {
    paddingTop: '120px',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  searchForm: {
    maxWidth: '885px',
    '& .MuiInputBase-root': {
      height: '53px',
      fontSize: '19px'
    },
    '& .MuiButtonBase-root': {
      boxShadow: 'none',
      borderRadius: '0',
      height: '44px',
      fontSize: "15px"
    }
  },
  mobileHeaderInner: {
    borderBottom: '1px solid #cfd7d7',
    padding: '13px 0',
    height: "24px",
    '& .MuiIconButton-root': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '10px'
    }
  },
  mobileHeaderLogo: {
    '& a': {
      width: '275px',
      position: 'relative',
      display: 'inline-block',      
      margin: '0 auto',
      backgroundRepeat: 'no-repeat',
      opacity: '0.5',
      fontSize: '24px',
      lineHeight: '1.2',
      color: '#000',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Univers'
    }    
  },
  mobileSearchBtn: {
    position: 'absolute !important',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '10px',
    left: 'unset !important'
  },
  mobileSearchForm: {
    padding: '30px 20px',
    '& .MuiInputBase-root': {
      height: '45px',
      borderRadius: '0',
      paddingRight: '0'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ccc'
    },
    '& .MuiButtonBase-root': {
      width: '45px',
      height: '45px',
      minWidth: 'unset',
      boxShadow: 'none',
      borderRadius: '0'
    },
    '& .MuiInputAdornment-root': {
      marginRight: '0'
    }
  },
  mobileSearchBox: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  }
}));

export default searchDialogStyles;
