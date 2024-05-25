import React from 'react'
import {RiDownloadFill, RiHammerFill, RiMailAddFill, RiPhoneFill, RiUserLocationFill, RiWebhookFill} from "@remixicon/react";
import './footer.css'
const Footer = () => {
  return (
    <>
        <div className="footer">
          <div className="footer_container">
            <div className="contact_us">
              <h2>Contact Us</h2>
              <div className="contact">
                <div className="loc"><RiUserLocationFill className='loc_icon'/><p>Pace Acyuta, Plot-25/26-E ,
                    Rajiv Gandhi Salai,Chennai</p></div>
                <div className="phone">
                  <RiPhoneFill/><p>phone : +91-9500056905</p>
                </div>
                <div className="email">
                  <RiMailAddFill/>Email : info@example.com
                </div>
                <div className="web">
                  <RiWebhookFill/>Web :www.senateeng.com
                </div>
              </div>
              </div>

              <div className="services_container">
                <h2>Services</h2>
                <div className="services">
                  
                  <p>Project Management</p>
                  <p>Constrction Management</p>
                  <p>Repairs and Refurbishment</p> 
                  <p>Design & Built</p>    
                </div>
              </div>


              <div className="siteLink">
                <h2>SiteLinks</h2>
                <div className="sites">
                  <p>Home</p>
                  <p>about</p>
                  <p>services</p>
                  <p>contact us</p>
                  <p>FAQ</p>
                  <p>Admin Login</p>
                </div>
              </div>


              <div className="ongoing_projects">
                <h2>Ongoing Projects</h2>
                <div className="projects">
                  <div className="project">
                    <p>We not only have thorough expertise in construction,
                       we also do cost and strategic consulting for construction projects.</p>
                      <h3><RiHammerFill className='hammerfil'/>View Projects</h3> 
                  </div>

                  <div className="project">
                    <p>We not only have thorough expertise in construction,
                       we also do cost and strategic consulting for construction projects.</p>
                      <h3><RiHammerFill  className='hammerfil'/>View Projects</h3> 
                  </div>
                </div>
              </div>
            
          </div>
        </div>

    </>
  )
}

export default Footer

