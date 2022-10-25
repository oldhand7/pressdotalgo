const featureLargeImageStyles = ((theme) => ({
  featureLargeImage: {

  },
  featureLargeImageInner: {
    marginBottom: '40px',
    display: 'table',
    tableLayout: 'fixed',
    '& > .MuiBox-root': {
      display: 'table-cell',
      padding: '0 16px',
      boxSizing: 'content-box'
    }    
  },
  leftColumn: {
    width: '607px',
    paddingLeft: '0 !important',
    '& .article-card-title': {
      '& h3': {
        fontSize: '30px',
        lineHeight: '30px'
      }      
    }
  },
  rightColumn: {
    width: '287px',
    paddingRight: '0 !important',
    verticalAlign: 'top',
    '& .article-card-title': {
      '& h3': {
        fontSize: '20px',
        lineHeight: '22px'
      }      
    }
  }
}));

export default featureLargeImageStyles;
