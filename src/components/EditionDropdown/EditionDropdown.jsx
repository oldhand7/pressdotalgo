import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import styles from 'assets/jss/components/editionDropdownStyles';

const useStyles = makeStyles(styles);

const EditionDropdown = () => {

  const classes = useStyles();

  const [language, setLanguage] = useState('english');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Select
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      value={language}    
      onChange={handleChange}
      className={classes.dropdown}
    >
      <MenuItem value='english'>English Edition</MenuItem>
      <MenuItem value='chinese'>中文 (Chinese)</MenuItem>
      <MenuItem value='japanese'>日本語 (Japanese)</MenuItem>
    </Select>
  )
}

export default EditionDropdown;
