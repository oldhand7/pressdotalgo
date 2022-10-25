const featuredStripItemStyles = ((theme) => ({
  featuredStrip: {
    // marginBottom: '16px',
    [theme.breakpoints.down('lg')]: {
      display: 'block'
    }
  },
  featuredStripImg: {
    paddingRight: '14px',
    float: 'left',
    '& img': {
      height: '80px',
      width: '80px',
      display: 'block',
      borderRadius: '80px',
      border: '1px solid #ccc'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      justifyContent: 'center',
      float: 'none',
      marginBottom: '15px',
      paddingRight: '0'     
    }
  },
  featuredStripText: {
    overflow: 'hidden',
    '& h3': {
      fontSize: '18px',
      margin: '3px 0',
      '& a': {
        color: '#333',
        '&:hover': {
          color: '#0080c3'
        }
      }
    },
    '& span': {
      color: '#555',
      fontSize: '14px',
      fontFamily: 'Times New Roman',
      fontStyle: 'italic',
      lineHeight: '20px',
      fontWeight: '400'
    },
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center'
    }
  }
}));

export default featuredStripItemStyles;
