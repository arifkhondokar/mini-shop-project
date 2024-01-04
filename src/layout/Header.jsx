import React, { useState } from 'react'
import '../layout/layout.css'
import {NavLink} from 'react-router-dom'
import { FaBars } from "react-icons/fa";

const Header = () => {
  
  const [sidebarActive, setSidebarActive] = useState(false);
 
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  
  return (
    <>
    <section className='header_section'>
      <nav className='navber container'>
          <div className={`side_bar ${sidebarActive ? 'active' : ''}`}>
            <ul className='side_bar-menu'>
              <li>
                <NavLink className="link" to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink className="link" to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink className="link" to='/orderlist'>Order List</NavLink>
              </li>
              <li>
                <NavLink className="link" to='/menu'>Our Menu</NavLink>
              </li>
              <li>
                <NavLink className="link" to='/contact'>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className='logo'>
            <img src="images/logo01.jpg" alt="logo" />
          </div>
          <div className='nav_menu'>
            <ul>
              <li>
                <NavLink className="link" to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink className="link" to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink className="link" to='/orderlist'>Order List</NavLink>
              </li>
              <li>
                <NavLink className="link" to='/menu'>Our Menu</NavLink>
              </li>
              <li>
                <NavLink className="link" to='/contact'>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="bars" onClick={toggleSidebar}>
            <FaBars className='icon'/>
          </div>
      </nav>
    </section>
    </>
  )
}

export default Header