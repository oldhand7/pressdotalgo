const recommendedVideoStyles = ((theme) => ({
  recommendedVideo: {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #eaeaea',    
  },
  thumb: {
    display: 'block',
    marginLeft: '8px',
    minWidth: '105px',

  },
  thumbOverlay: {
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
    background: 'linear-gradient(180deg,transparent,#000)'
  },
  thumbContain: {
    color: '#000',
    '& h3': {
      position: 'absolute',
      color: '#fff',
      fontSize: '18px',
      lineHeight: '20px',
      zIndex: '1',
      width: 'calc(100% - 24px)',
      left: '12px',
      bottom: '30px'
    }
  },
  thumbPlayDuration: {
    bottom: '5px',
    left: '3px',
    zIndex: '1',
    '& .MuiSvgIcon-root': {
      color: '#fff',
      fontSize: '16px'
    }
  },
  mark: {
    '&.MuiTypography-root': {
      width: '0.5em',
      padding: '8px 12px 8px 4px',
      fontSize: '30px',
      lineHeight: '34px',
      fontFamily: 'Times New Roman'
    }
  },
  headline: {
    '& h3': {
      fontSize: '18px',
      lineHeight: '20px'
    }
  },
  text: {
    padding: '16px 0'
  },
  largeItem: {
    marginLeft: '0',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flex: '1'
    }
  },
  hideBorderTop: {
    borderTop: '0'
  }
}));

export default recommendedVideoStyles;
