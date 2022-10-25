const editionDropdownStyles = (() => ({
  dropdown: {
    '& .MuiSelect-select': {
      padding: '5px 25px 5px 0 !important',
      minHeight: 'unset !important',      
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0'
    },
    '&.MuiInputBase-root': {
      fontSize: '13px',
      lineHeight: '1',
      color: '#555'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '13px',
      color: '#555',
      fontFamily: 'Times New Roman'
    }
  }
}));

export default editionDropdownStyles;
