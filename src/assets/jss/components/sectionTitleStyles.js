import arrowRightImg from 'assets/img/arrow-right.svg';

const sectionTitleStyles = ((theme) => ({
  sectionTitle: {
    '&.MuiTypography-root': {
      padding: '12px 0',
      fontSize: '20pt',
      lineHeight: '22px',
      color: '#333',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center'
    }
  },
  iconLink: {
    height: '18px',
    width: '18px',
    marginLeft: '12px',
    backgroundImage: `url(${arrowRightImg})`,
    display: 'block',
    cursor: 'pointer'
  },
  showBorderTop: {
    '&.MuiTypography-root': {
      borderTop: '1px solid #555'
    } 
  }
}));

export default sectionTitleStyles;
