// rfce(short cut to import)
import React from 'react';
import '../css/Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import Logo from '../images/logo.png';

function Header() {
  return (
    <div className='header'>
    {/* <h2>I am header</h2> */}
    <IconButton>
        <PersonIcon fontSize = "large" className = "header__icon"/> 
    </IconButton>

    <img src={Logo} alt = "logo"></img>  
    <IconButton>
    <ForumIcon fontSize='large' className='header__icon'/>
    </IconButton>
    
    </div>
  )
}

export default Header
