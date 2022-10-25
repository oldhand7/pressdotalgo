const marketTicketItemStyles = ((theme) => ({
  ticketItem: {
    boxSizing: 'border-box',
    display: 'flex',
    width: '138px',
    minWidth: '138px',
    height: '52px',
    padding: '8px',
    lineHeight: '17px',
    borderRadius: '2px',
    textTransform: 'none !important',
    '& img': {
      width: '16px',
      height: '16px',
      marginRight: '8px'
    }
  },
  down: {
    backgroundColor: 'rgba(246,188,166,.30196078431372547)',
    '& p': {
      color: '#aa0606'
    }
  },
  up: {
    backgroundColor: 'rgba(184,205,180,.30196078431372547)',
    '& p': {
      color: '#13740b'
    }
  },
  ticketData: {
    fontSize: '13px',
    overflow: 'hidden',
    fontFamily: 'Times New Roman',
    '& h6': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    '& p': {
      marginTop: '2px',
      wordSpacing: '2px',
      '& span': {
        fontWeight: '350',
        marginLeft: '5px',
        whiteSpace: 'nowrap'
      }
    }    
  }
}));

export default marketTicketItemStyles;
