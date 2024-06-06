import React from 'react'
import './about.css'
import './core_strengths.css'
import Footer from '../Footer'
import { RiKeyFill } from '@remixicon/react'
import NavBar from '../NavBar'

const AboutUs = () => {
  return (
    <>

        <NavBar/>


        <div className="aboutus">
            <div className="aboutus_image"></div>
            <div className="aboutus_content">
                <div className="header">About Us</div>
                <div className="content">
                Senate Engineering was founded by a core team of professionals with over 20+ years
                 of hands-on experience in constructionandprojectmanagement. 
                 Senate Engineering was founded in the year 2018 as a core construction company and 
                 quickly transformed into a multi-dimensional construction company with strong expertise 
                 in various facets of construction. Engineers with 4 to 20 years of handson experience in 
                 different facades of the construction industry. All our completed projects stand as a tall testimony to our eye for details, construction quality, contemporary design, architectural merits, finesse, standards of materials used, aesthetic values,
                 top notch amenities, grandeur finish and our passion for excellence
                </div>

                <div className="contactus_button">Contact Us</div>
    
            </div>
        </div>


        <div className="core_strengths">
          <div className="headers">
            <div className="header">
                          BUILDING DREAMS INTO REALITY: OUR CORE STRENGTHS IN
              CONSTRUCTION
            </div>
            <div className="subheader">
            Explore how our construction website empowers vision with skilled craftsmanship,
             cutting-edge technology, and a commitment to client satisfaction.
            </div>
          </div>


          <div className="core_boxes">
            <div className="core_box">
              <div className="core_image"></div>
              <div className="core_content1">Project Planning
              <div className="core_content2">Our meticulous Project Planning services lay the foundation for successful construction ventures. we strategize every step, ensuring efficient execution and Successful ontime project completion.</div>
              </div>
              
            </div>

            <div className="core_box">
              <div className="core_image"></div>
              <div className="core_content1">Cost Management
              <div className="core_content2">Achieve financial efficiency and control in your construction projects with our expert Cost Management solutions</div>
              </div>
              
            </div>

            <div className="core_box">
              <div className="core_image"></div>
              <div className="core_content1">Building Consultancy
              <div className="core_content2">From project inception to completion, we offer tailored solutions, compliance support, and innovative insights to ensure your construction endeavors reach their full potential.</div>
              </div>
              
            </div>


            <div className="core_box">
              <div className="core_image"></div>
              <div className="core_content1">Execution Planning
              <div className="core_content2">With meticulous attention to detail, strategic scheduling, and seamless coordination, we create a roadmap for efficient project execution, ensuring smooth operations and successful project completion.</div>
              </div>
              
            </div>

            <div className="core_box">
              <div className="core_image"></div>
              <div className="core_content1">Quality Management
              <div className="core_content2">Ensure excellence in construction projects with our rigorous Quality Management approach.</div>
              </div>
              
            </div>

            <div className="core_box">
              <div className="core_image"></div>
              <div className="core_content1">Project Planning
              <div className="core_content2">Trust our skilled team of experts to handle all your structural repair needs. From identifying and assessing issues to implementing effective restoration solutions</div>
              </div>
              
            </div>

            

            
          </div>
        </div>



        <div className="keys">
          <div className="headers">
            <div className="header">BUILDING DREAMS-OUR KEY DIFFERENTIATORS</div>
            <div className="subheader">Key Differentiators to construction services for the enlightment of the clients to built them</div>
          </div>

          <div className="keys_container">
            

          

            <div className="key_box">
              <div className="key_c">
              <div className="key_head">Key 1</div>
              <div className="key_content">Comprehensive expertise in core construction processes for a hands-on experience you can trust</div>
              </div>
              <div className="key_arrow"><RiKeyFill/></div>
            </div>

            

            <div className="key_box">
              <div className="key_c">
              <div className="key_head">Key 2</div>
              <div className="key_content">Precise planning and methodical execution, ensuring flawless construction outcomes.</div>
              </div>
              <div className="key_arrow"><RiKeyFill/></div>
            </div>

            <div className="key_box">
              <div className="key_c">
              <div className="key_head">Key 3</div>
              <div className="key_content">Seasoned project management team to deliver successful projects on schedule.</div>
              </div>
              <div className="key_arrow"><RiKeyFill/></div>
            </div>

            <div className="key_box">
              <div className="key_c">
              <div className="key_head">Key 4</div>
              <div className="key_content">Consistent on-time project completion for your peace of mind.</div>
              </div>
              <div className="key_arrow"><RiKeyFill/></div>
            </div>

            <div className="key_box">
              <div className="key_c">
              <div className="key_head">Key 5</div>
              <div className="key_content">A versatile, process-driven company with expertise across multiple disciplines</div>
              </div>
              <div className="key_arrow"><RiKeyFill/></div>
            </div>


            <div className="key_box">
              <div className="key_c">
              <div className="key_head">Key 6</div>
              <div className="key_content">Innovative and customer-centric, dedicated to exceeding your expectations.</div>
              </div>
              <div className="key_arrow"><RiKeyFill/></div>
            </div>

            <div className="key_box">
              <div className="key_c">
              <div className="key_head">Key 7</div>
              <div className="key_content">Unyielding commitment to superior material quality for lasting results.</div>
              </div>
              <div className="key_arrow"><RiKeyFill/></div>
            </div>

            <div className="key_box">
              <div className="key_c">
              <div className="key_head">Key 8</div>
              <div className="key_content">Approachable and customer-oriented, fulfilling all your construction needs.</div>
              </div>
              <div className="key_arrow"><RiKeyFill/></div>
            </div>


            
          </div>
        </div>


       




      <Footer/>

    
    </>
  )
}

export default AboutUs