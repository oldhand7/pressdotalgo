const opinionCardStyles = ((theme) => ({
  opinionCard: {
    borderBottom: '1px solid #eaeaea',
    marginBottom: '10px',
    '& h3': {
      fontSize: '18px',
      lineHeight: '20px',
      '& a': {
        color: 'inherit',
        '&:hover': {
          color: '#0080c3'
        }
      }
    },
    '& p': {
      lineHeight: '18px',
      fontSize: '14px',
      paddingTop: '7px',
      paddingBottom: '14px',
      fontStyle: 'italic'
    },
    [theme.breakpoints.down('md')]: {
      width: '33.33%',
      padding: '0 10px 10px',    
      textAlign: 'center',
      boxSizing: "border-box",
      borderBottom: '0',
      '& p': {
        paddingBottom: '11px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      borderBottom: '1px solid #eaeaea',
      marginBottom: '10px',
      width: '100%',
      textAlign: 'left',
      padding: '0'
    }
  },
  avatar: {
    width: '40px',
    height: '40px',
    marginRight: '8px',
    '& a': {
      dispaly: 'block'
    },
    '& img': {
      border: '1px solid #999',
      borderRadius: '100%'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  infoBody: {
    flex: '1',
    [theme.breakpoints.down('md')]: {
      borderBottom: '1px solid #eaeaea'
    },
    [theme.breakpoints.down('sm')]: {
      borderBottom: '0'
    }
  }
}));

export default opinionCardStyles;
