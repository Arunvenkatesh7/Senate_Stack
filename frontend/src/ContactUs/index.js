import React from 'react'
import { RiMailCheckFill, RiPhoneFill, RiUserLocationFill } from "@remixicon/react";
import './contact.css'
import './vtr.css'
import NavBar from '../NavBar';
import FormElement from '../FormElement';
import Footer from '../Footer'

const ContactUs = () => {
  return (
    <>

  <NavBar/>
      
<div className="vtr">
        <div className="vtr_container">
          <div className="vtr_image"></div>

          <div className="vtr_content">
            <div className="vtr_header">
Making your vision become a reality</div>

            <div className="vtr_subheader">Build Your Dreams with Us</div>
            <div className="vtr_cont1">Our team of dedicated professionals is committed to delivering exceptional construction solutions tailored to your unique needs. 
            We look forward to collaborating with you on your upcoming project.</div>
            <div className="vtr_cont2">At Senate Engineering, we understand the importance of turning your vision into reality.
             With our expertise and attention to detail, we will work closely with you to bring your ideas to fruition.
             Our goal is to exceed your expectations and create spaces that inspire. As a trusted construction company, we pride ourselves on solid foundations for a brighter future.</div>
          </div>
        </div>
      </div>
     







    <div className="connect_overall">
      <div className="headers">
        <div className="header">
              GET IN TOUCH: CONNECT WITH OUR CONSTRUCTION
              PROFESSIONALS</div>
              <div className="subheader">
      Have questions or need advice regarding construction? 
      Contact our knowledgeable team to access expert insights and reliable solutions tailored to your needs.
      </div>      
      </div>
      
      <div className="connect">     
          <div className="connect_boxes">
              <div className="connect_box">
                <div className="symbol">
                  <RiMailCheckFill className='symbol_resize'/>
                </div>
                <div className="subject">Email:stalin@senateeng.com</div>
              </div>

              <div className="connect_box">
                <div className="symbol">
                  <RiPhoneFill className='symbol_resize'/>
                </div>
                <div className="subject">Phone No: +91 9500056905</div>
              </div>

              <div className="connect_box">
                <div className="symbol">
                  <RiUserLocationFill className='symbol_resize'/>
                </div>
                <div className="subject">Pace Acyuta,Plot-25/26-E,
                                          Rajiv Gandhi Salai,
                                          Seemathamman Nagar,
                                          Maduravoyal,Chennai-600 095</div>
              </div>
          </div>

      </div>
      </div>



        <FormElement/>

      <Footer/>


    </>
  )
}

export default ContactUs