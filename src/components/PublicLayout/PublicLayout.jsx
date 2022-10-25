import React, { useState } from 'react';

import Box from '@mui/material/Box';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SpecialOffer from 'components/SpecialOffer';
import MenuDrawer from 'components/MenuDrawer';
import SearchDialog from 'components/SearchDialog';

const PublicLayout = (props) => {

  const { children } = props;

  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showSpecialOffer, setShowSpecialOffer] = useState(true);

  return (
    <Box>
      <Header 
        handleOpenSidebar={() => setOpenSidebar(true)} 
        handleOpenSearchBox={() => setOpenSearchBox(true)}
      />
      <Box>
        {
          children
        }
      </Box>
      <Footer />
      {
        showSpecialOffer && (<SpecialOffer hideSpecialOffer={() => setShowSpecialOffer(false)} />)
      }      
      <MenuDrawer 
        open={openSidebar} 
        handleClose={() => setOpenSidebar(false)} 
        handleOpenSearchBox={() => setOpenSearchBox(true)}
      />
      <SearchDialog 
        open={openSearchBox} 
        handleOpen={() => setOpenSearchBox(true)}
        handleClose={() => setOpenSearchBox(false)}        
        handleCloseSidebar={() => setOpenSidebar(false)}
      />
    </Box>
  )
}

export default PublicLayout;
