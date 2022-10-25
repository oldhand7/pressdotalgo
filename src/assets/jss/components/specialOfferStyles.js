const specialOfferStyles = ((theme) => ({
  specialOffer: {
    backgroundColor: 'rgb(244, 244, 244)',
    boxShadow: '0 -5px 10px rgb(0 0 0 / 35%)',
    left: '0',
    bottom: '0',
    zIndex: '51',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '50px'
    }
  },
  specialOfferInner: {
    transition: 'all 0.25s ease-in-out',
    height: '50px',
    padding: '9px',
    boxSizing: 'border-box',
    '& h3': {
      fontSize: '30px',
      marginRight: '10px'
    },
    '& p': {
      fontSize: '28px',
      marginRight: '10px'
    },
    '& > .MuiLink-root': {
      padding: '0 10px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#0274B6',
      color: '#fff',
      fontFamily: 'Times New Roman',
      fontWeight: '500',
      fontSize: '14px',
      transition: 'all 0.25s',
      '&:hover': {
        backgroundColor: '#015483'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& h3': {
        fontSize: '20px',        
        marginRight: "5px"
      },
      '& p': {
        fontSize: "23px",
        lineHeight: '20px',
        margin: '3px 0 0 0'
      },
      '& > .MuiLink-root': {
        fontSize: '10px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      '& h3': {
        display: 'none'
      },
      '& p': {
        fontSize: "22px",
        lineHeight: '19px'
      }
    },
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      height: 'auto',
      '& p': {
        fontSize: '16px'
      }
    }
  },
  brand: {
    '& .MuiLink-root': {
      fontFamily: 'Univers',
      color: '#000',
      fontSize: '30px',
      fontWeight: '700'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  closeBtn: {
    position: 'absolute !important',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '40px',
    [theme.breakpoints.down('sm')]: {
      right: '20px',
      top: '30px',
      left: 'unset'
    }
  }
}));

export default specialOfferStyles;
