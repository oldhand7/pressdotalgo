const couponItemStyles = ((theme) => ({
  couponItem: {
    minHeight: '59px',
    flexBasis: '33.3%',
    paddingTop: '8px',
    border: '0',
    color: '#0274b6',
    fontFamily: 'Times New Roman',
    fontSize: '16px',
    '& p': {
      fontSize: '12pt',
      textTransform: 'uppercase'
    },
    '& a': {
      color: 'inherit',
      lineHeight: '20px',
      display: 'inline-block',
      paddingRight: '10px',
      fontSize: '14pt',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    [theme.breakpoints.down("lg")]: {
      flexBasis: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      minHeight: 'unset'
    }
  }
}));

export default couponItemStyles;
