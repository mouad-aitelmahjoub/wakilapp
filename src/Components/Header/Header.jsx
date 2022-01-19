import React from 'react';
import './header.css'
import { Hero } from './Hero/Hero';
import { Menu } from './Menu/Menu';

const Header = () => {
  return <div className='header-section'>
      <Menu/>
      <Hero/>
      
  </div>;
};

export default Header;
