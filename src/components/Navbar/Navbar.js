import React, { useState } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownAdmin from '../DropdownMenu/DropdownAdmin';
import DropdownDispatch from '../DropdownMenu/DropdownDispatch'
import DropdownCustomers from '../DropdownMenu/DropdownCustumers';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownAdmin, setDropdownAdmin] = useState(false);
  const [dropdownDispatch, setDropdownDispatch] = useState(false);
  const [dropdownCustomer, setDropdownCustomer] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnterAdmin = () => {
    if (window.innerWidth < 960) {
      setDropdownAdmin(false);
    } else {
      setDropdownAdmin(true);
    }
  };

  const onMouseLeaveAdmin = () => {
    if (window.innerWidth < 960) {
      setDropdownAdmin(false);
    } else {
      setDropdownAdmin(false);
    }
  };

  const onMouseEnterDispatch = () => {
    if (window.innerWidth < 960) {
      setDropdownDispatch(false);
    } else {
      setDropdownDispatch(true);
    }
  };

  const onMouseLeaveDispatch = () => {
    if (window.innerWidth < 960) {
      setDropdownDispatch(false);
    } else {
      setDropdownDispatch(false);
    }
  };

  const onMouseEnterCustomer = () => {
    if (window.innerWidth < 960) {
      setDropdownCustomer(false);
    } else {
      setDropdownCustomer(true);
    }
  };

  const onMouseLeaveCustomer = () => {
    if (window.innerWidth < 960) {
      setDropdownCustomer(false);
    } else {
      setDropdownCustomer(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          DISPATCH MANAGEMENT SYSTEM
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnterAdmin} onMouseLeave={onMouseLeaveAdmin}>
            <Link to='#' className='nav-links' onClick={closeMobileMenu}>
              Administrators <i className='fas fa-caret-down' />
            </Link>
            {dropdownAdmin && <DropdownAdmin />}
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnterDispatch} onMouseLeave={onMouseLeaveDispatch}>
            <Link to='#' className='nav-links' onClick={closeMobileMenu}>
              Dispatcher
            </Link>
            {dropdownDispatch && <DropdownDispatch />}
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnterCustomer} onMouseLeave={onMouseLeaveCustomer}>
            <Link to='#' className='nav-links' onClick={closeMobileMenu}>
              Customers
            </Link>
            {dropdownCustomer && <DropdownCustomers />}
          </li>          
          {/* <li className='nav-item'>
            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li> */}
          <li>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;