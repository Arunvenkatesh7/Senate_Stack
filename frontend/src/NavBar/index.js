import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { RiMenuLine } from "@remixicon/react";

const NavBar = () => {

      const [isVisible,setIsVisible] =useState(false);
      const [active,setActive]=useState(0);


      const set_Active=(index)=>{
          setActive(index);
      }


      const toggler=()=>{
        setIsVisible(!isVisible);
      }

      

  return (
    <>
      

      <div className="navbar">
        <div className="navbar_container">
            <Link to="/"><div className="nav_logo"></div></Link>
            <ul className="nav_links">              
                <li onClick={()=>{set_Active(0)}}><Link className={`link ${active ===0 ? 'active':''}`} to="/">Home</Link></li>
                <li onClick={()=>{set_Active(1)}}><Link className={`link ${active ===1 ? 'active':''}`} to="/services">Project</Link></li>
                <li onClick={()=>{set_Active(2)}}><Link className={`link ${active ===2 ? 'active':''}`} to="/aboutus">About</Link></li>
                <li onClick={()=>{set_Active(3)}}><Link className={`link ${active ===3 ? 'active':''}`} to="/contact" >Contact</Link></li>
                <li onClick={()=>{set_Active(4)}}><Link className={`link ${active ===4 ? 'active':''}`} to="/clientelle" >Clientelle</Link></li>
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