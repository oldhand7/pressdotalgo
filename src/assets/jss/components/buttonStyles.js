const buttonStyles = (() => ({
  btn: {
    '&.MuiButtonBase-root': {
      fontSize: '14px',
      lineHeight: '14px',
      border: '1px solid #ccc',
      color: '#555',
      borderRadius: '0',
      fontFamily: 'Times New Roman',
      padding: '15px'
    }
  },
  blueBtn: {
    '&.MuiButtonBase-root': {     
      border: '0',
      color: '#fff',
      backgroundColor: '#0274b6',
      '&:hover': {
        backgroundColor: '#015483',
      }
    }
  }
}));

export default buttonStyles;
