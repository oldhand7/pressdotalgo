const mostPopularItemStyles = (() => ({
  mostPopularItem: {
    color: '#000',
    display: 'block',
    position: 'relative',
  },
  text: {
    padding: '16px 0',
    borderTop: '1px solid #eaeaea',
    display: 'flex',
    alignItems: 'stretch',
    '& h3': {
      fontSize: '18px',
      lineHeight: '22px'
    }
  },
  mark: {
    '&.MuiTypography-root': {
      width: '0.5em',
      padding: '8px 12px 8px 4px',
      fontSize: '30px',
      lineHeight: '34px'
    }
  },
  thumb: {
    width: 'calc(100% - 31px)',
    display: 'block',
    position: 'relative',
    height: 'auto'
  },
  thubOverlay: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    background: 'linear-gradient(180deg,transparent,#000)'
  },
  thumbText: {
    borderTop: 'none',
    position: 'relative',   
    paddingTop: '0',
    paddingBottom: '0',
    '& h3': {
      width: 'calc(100% - 24px)',
      left: '12px',
      bottom: '12px',
      color: '#fff',
      position: 'absolute'
    }
  }
}));

export default mostPopularItemStyles;
