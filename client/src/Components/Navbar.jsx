import React from 'react'
import { IoSearchOutline } from 'react-icons/io5';
import {GrCart} from "react-icons/gr"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
function Navbar() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      
    },
  }));
  return (
    <>
    <div className='main-container'>
    <div className="header">
        <div className="logo">405 Found</div>
        <div className="categories">
          24 Categories <span>View All</span>
        </div>
        <div className="search-container">
          <input type="text" placeholder="I'm shopping for..." />
          <IoSearchOutline className="search-icon" />
        </div>
        <div className='cart-container'>
        <StyledBadge badgeContent={1} color="secondary" >
          <GrCart className='cart-icon'/>
          </StyledBadge>
        </div>
        <div className="user">Ryan</div> 
      </div>
      <div className='categories-container'>
      <div className='categories'> Popular Products </div>
      <div className='categories'> Favourite Brands</div>
      <div className='categories'>Best Deals</div>
      <div className='categories'>Top Reviews</div>
      <div className='categories'>Highest Rated</div>
      <div className='categories'>Recently Viewed</div>
      </div>
      </div>
      </>
  )
}

export default Navbar 
