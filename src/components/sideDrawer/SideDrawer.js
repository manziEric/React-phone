import React from 'react';
import {Link} from 'react-router-dom';

const SideDrawer = ({click}) => {
  return (
    <div>
      <nav className='side-drawer'>
        <div onClick={click} className='close-drawer'>
          <div onClick={click} className='image'></div>
        </div>
        <ul>
          <li>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/products' className='nav-link'>
              Products
            </Link>
          </li>
          <li>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </li>
          <li>
            <Link to='/contact' className='nav-link'>
              Contact
            </Link>
          </li>
          <li>
            <Link to='/cart' className='nav-link'>
              My Cart
            </Link>
          </li>
        </ul>
      </nav>
      <div onClick={click} className='backdrop' />
    </div>
  );
};

export default SideDrawer;
