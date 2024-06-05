import React from 'react'
import './home.css'
import {RiArrowUpDownFill, RiArrowUpLine, RiHammerFill, RiHomeHeartFill, RiUser2Line } from "@remixicon/react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Brochere from '../Brochere';
import Footer from '../Footer';


const HomePage = () => {

    const [isVisible,setIsVisible] =useState(false);


    const showHideNavbar =() =>{
        setIsVisible(!isVisible);
    }



  return (
    <>
<div className="overall_home">
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
                <li><Link className='link' to="/services">Project</Link></li>
                <li><Link className='link' to="/aboutus">About</Link></li>
                <li><Link className='link' to="/contact" >Contact</Link></li>
            </ul>
    {isVisible?<ul className="mobile_nav_links">              
                <li><Link className='link active' to="/">Home</Link></li>
                <li><Link className='link' to="/services">Project</Link></li>
                <li><Link className='link' to="/aboutus">About</Link></li>
                <li><Link className='link' to="/contact">Contact</Link></li>
            </ul>:<></>}
            



            <div className="reglogbuttons">
                <div className='reglogbutton'> <Link className='link' to="/contact"><span class="contact_button">Contact</span></Link> </div>
                <div onClick={showHideNavbar} className="hamburger_menu"><RiHammerFill/></div>
            </div>

        </div>
        </div>
    </div>
    

</div> 

     

     



       

    <Brochere/>
    <Footer/>
</div>    
    </>
  )
}

export default HomePage