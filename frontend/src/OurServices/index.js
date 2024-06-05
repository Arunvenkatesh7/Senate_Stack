import React from 'react'
import './services.css'
import NavBar from '../NavBar'
import Gallery from '../Gallery'
import Footer from '../Footer'


const Services = () => {
  return (
    <>
    <div className="nav_sep">
      <NavBar/>
      <div className="services_container_all">
        <div className="service_container">
          <div className="headers">
            <h3>OUR SERVICES</h3>
            <h1 className='header'>STREAMLINED CONSTRUCTION EXCELLENCE:
                  DESIGN, BUILD, MANAGE</h1>
            <h2 className="subheader">
            Experience excellence in construction with our comprehensive services 
            covering design, construction, and project management.
            </h2>
          </div>
            <div className="services">
              <div className="service">
                <div className="servicehead">Design & Build</div>
                <p className="service_content">Achieve construction excellence with our vertically integrated approach, combining design, building, and delivery. 
                Our customer-centric solutions ensure every project meets the highest standards, providing a streamlined and efficient construction experience.</p>
              </div>

              <div className="service">
                <div className="servicehead">Construction Management & Project Management</div>
                <div className="service_content">Excellence in Construction Management: Delivering Quality, On Time.Effortless Project Execution. 
                Our expertise in project management ensures a seamless construction process, meticulously coordinated for timely delivery</div>

              </div>

              <div className="service">
                <div className="servicehead">
                Structural Repairs And Refurbishment
                </div>
                <div className="service_content">
                we can also do repairs and refurbishments exclusively. We can redo already constructed projects or old projects with minimal demolition. 
                We can suggest ways to make the best use of the stability to save time and cost.
                </div>
              </div>

            </div>
        </div>
      </div>
    
      </div> 



      <Gallery/> 
      <Footer/>

    
    
    </>
  )
}

export default Services