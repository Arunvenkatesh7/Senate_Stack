import React from 'react'
import './home.css'
import { RiMenuLine} from "@remixicon/react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Brochere from '../Brochere';
import Footer from '../Footer';
import BootSlider from '../BootSlider'




const HomePage = () => {

    const [isVisible,setIsVisible] =useState(false);
    const [active,setActive]=useState(0);
    
    const set_Active=(index)=>{
        setActive(index);
    }



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
            <div className='senate_logo'>
            <Link to='/' href='#'>

            </Link>
            </div>


            <ul className="nav_links">              
            <li onClick={()=>{set_Active(0)}}><Link className={`link ${active ===0 ? 'active':''}`} to="/">Home</Link></li>
                <li onClick={()=>{set_Active(1)}}><Link className={`link ${active ===1 ? 'active':''}`} to="/services">Project</Link></li>
                <li onClick={()=>{set_Active(2)}}><Link className={`link ${active ===2 ? 'active':''}`} to="/aboutus">About</Link></li>
                <li onClick={()=>{set_Active(3)}}><Link className={`link ${active ===3 ? 'active':''}`} to="/contact" >Contact</Link></li>
                <li onClick={()=>{set_Active(4)}}><Link className={`link ${active ===4 ? 'active':''}`} to="/clientelle" >Clientelle</Link></li>

            </ul>
    {isVisible?<ul className="mobile_nav_links">              
                <li><Link className='link active' to="/">Home</Link></li>
                <li><Link className='link' to="/services">Project</Link></li>
                <li><Link className='link' to="/aboutus">About</Link></li>
                <li><Link className='link' to="/contact">Contact</Link></li>
            </ul>:<></>}

        <div className="slider_datas">
            <div className="slider_container">
                <div className="slider_slogan">WE ARE HERE FOR <span className='span_element'>BUILD</span> YOU UP</div>
                <div className="slider_content">BUILDING EXCELLENCE FROM GROUND UP</div>
                <div className="slider_button">Let's build</div>
            </div>
        </div>            



            <div className="reglogbuttons">
                
                <div onClick={showHideNavbar} className="hamburger_menu"><RiMenuLine/></div>
            </div>

        </div>
        </div>
    </div>



      
    

</div> 



        
     



       

    <Brochere/>



    <BootSlider/>

    <Footer/>
</div>    
    </>
  )
}

export default HomePage