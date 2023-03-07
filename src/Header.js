import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaceIcon from '@mui/icons-material/Place';
const Header = () => {
  return (
     <div className='header'>
     <img 
     className='header__logo' 
     alt="logo" 
     src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
     <div className='header__location' ><PlaceIcon /></div>
     <div className='header__address'>
        <span className='header__optionLineOne'>Hello,</span>
        <span className='header__optionLineTwo'>Your Address</span>
    </div>
     <div className='header__search' >
         <input className='header__searchInput' type='text' />
         <SearchIcon className='header__searchIcon' />
     </div>
     <div className='header__nav'>
    <div className='header__option'>
        <span className='header__optionLineOne'>Hello Guest</span>
        <span className='header__optionLineTwo'>Sign in</span>
    </div>
    <div className='header__option'>
        <span className='header__optionLineOne'>Return</span>
        <span className='header__optionLineTwo'>& Orders</span>
    </div>
    <div className='header__option'>
        <span className='header__optionLineOne'>Your</span>
        <span className='header__optionLineTwo'>Prime</span>
    </div>
    <div className='header__optionBasket'>
        <ShoppingCartIcon />
        <span className='header__optionLIneTwo header__basketCount'>0</span>
    </div>
    </div>
     </div>
  )
}

export default Header