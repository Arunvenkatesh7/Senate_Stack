import React from 'react'
import './home.css'
import {RiHammerFill, RiHomeHeartFill, RiUser2Line } from "@remixicon/react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Brochere from '../Brochere';

const HomePage = () => {

    const [isVisible,setIsVisible] =useState(false);


    const showHideNavbar =() =>{
        setIsVisible(!isVisible);
    }



  return (
    <>

  <div className="overall_front">
     <div className="frontier_page">
    
        <div className="blacker">  
          <div className='header'>
            <Link className='link logo' href='#'>
            <RiHomeHeartFill/>
            <span>Senate</span>
            </Link>



            <ul className="nav_links">              
                <li><Link className='link active' to="/">Home</Link></li>
                <li><Link className='link' to="/projects">Project</Link></li>
                <li><Link className='link' to="/about">About</Link></li>
                <li><Link className='link' to="/contact">Contact</Link></li>
            </ul>
    {isVisible?<ul className="mobile_nav_links">              
                <li><Link className='link active' to="/">Home</Link></li>
                <li><Link className='link' to="/projects">Project</Link></li>
                <li><Link className='link' to="/about">About</Link></li>
                <li><Link className='link' to="/contact">Contact</Link></li>
            </ul>:<></>}
            



            <div className="reglogbuttons">
                <div className='reglogbutton'> <Link className='link' to="/contact"><span class="contact_button">Contact</span></Link> </div>
                <div onClick={showHideNavbar} className="hamburger_menu"><RiHammerFill/></div>
            </div>

        </div>
        </div>
    </div>

    <div className="slider_data">
      {/* <div className="slogan_inner"> */}
          <div className="slogan">WE ARE HERE FOR <span>BUILD</span> YOU UP</div>
          <div className="main_content">BUILDING EXCELLENCE FROM<div class="centerer">GROUND UP</div></div>
          <div className="slogan_button">Let's Build</div>
      {/* </div> */}
    </div>
</div>  


    <Brochere/>
    
    </>
  )
}

export default HomePage