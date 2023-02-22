import React from 'react';
import { useState } from 'react';
import './SearchBar.css';
import logo from '../assets/mobile-transparent--blue.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchMode, setSearchMode] = useState(false);

    const toggleSearch = () => {
      setSearchMode(!searchMode);
    };
  
    const searchIcon = searchMode ? (
      <input type="text" placeholder="Search" />
    ) : (
      <SearchIcon onClick={toggleSearch} />
    );

    return (
        <div className='SearchBar'>
            <MenuIcon />
            <img src={logo} alt='DreamSpeak Logo' className='Logo'/>
            {searchIcon}
        </div>
    );
}

export default SearchBar;
