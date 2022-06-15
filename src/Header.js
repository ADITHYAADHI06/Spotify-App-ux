import Search from '@mui/icons-material/Search'
import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';

function Header({spotify}) {
  return (
    <div className='header'>
     <div className='header__left'>
        <SearchIcon />

    </div>
    <div className='header__right'>
    
    </div>
    </div>
  )
}

export default Header