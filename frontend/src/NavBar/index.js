import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {RiMenu2Fill, RiMenu3Fill, RiMenuLine } from "@remixicon/react";

const NavBar = () => {

      const [isVisible,setIsVisible] =useState(false);


      const toggler=()=>{
        setIsVisible(!isVisible);
      }

      

  return (
    <>
      

      <div className="navbar">
        <div className="navbar_container">
            <Link to="/"><div className="nav_logo"></div></Link>
            <ul className="nav_links">              
                <li><Link className='link active' to="/">Home</Link></li>
                <li><Link className='link' to="/services">Project</Link></li>
                <li><Link className='link' to="/aboutus">About</Link></li>
                <li><Link className='link' to="/contact" >Contact</Link></li>
            </ul>
          
        </div>
        <div onClick={toggler} className="hamburger_button"><RiMenuLine className="menu"/></div>
       
   {isVisible? <div className="mobile_links">
                <li onClick={toggler}><Link className='link active' to="/">Home</Link></li>
                <li onClick={toggler}><Link className='link' to="/services">Project</Link></li>
                <li onClick={toggler}><Link className='link' to="/aboutus">About</Link></li>
                <li onClick={toggler}><Link className='link' to="/contact" >Contact</Link></li>
        </div>:<></>}    
       
      </div>
    
    </>
  )
}

export default NavBar