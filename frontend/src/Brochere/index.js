import React from 'react'
import './brochere.css'
import {RiDownloadFill} from "@remixicon/react";
import './about_us.css'
import './excellence.css'

const Brochere = () => {
  return (
    <>

    <div className="about_container">
        <div className="container">
            <div className="image_container">   
                <div className="image"></div>
            </div>

            <div className="content_container">
                <div className="con_container">
                    <div className="con_header">Setting World Class Benchmarks of Construction Excellence</div>
                    <div className="con_subheader">Building Dreams - <span>With Us For You</span></div>
                
                    <div className="content1">Senate Engineering was founded by a core team of professionals
                    with over 20+ years of hands-on experience in constructionandprojectmanagement..</div>
                    <div className="content2">Senate Engineering was founded in the year 2018 as a core construction company and
                    quickly transformed into a multi-dimensional construction company with strong expertise in various facets of construction. 
                    Engineers with 4 to 20 years of handson experience in different facades of the construction industry.</div> 
                    <a href='/frontend/public/favicon.ico' download='/frontend/public/robots.txt' className="download_link"><RiDownloadFill className='download_icon'/>Download our Brochere</a> 
                </div>              
            </div>
        </div>


    </div>






    <div className="brochere_container">

        <div className="b_container">
           

                <div className="brochere_content">
                    <div className="content">
                        <div className="b_title">WHY CHOOSE US?</div>
                        <div className="content1">Our quality focus, customer-focused business activities and efficient process mechanism
                         ensure our customers get outstanding value for money, every time.</div>
                         <div className="content2">We believe in providing customized solutions to
                          our clients. We will work closely with you to understand your goals, branding, and target audience.:
                          We pride ourselves on our commitment to delivering high-quality craftsmanship. Our skilled 
                          construction professionals pay attention to every detail, ensuring aesthetics of Value 
                          Engineering.</div>
                          </div>    
                </div>

                <div className="brochere_image">
                    <div className="image"></div>
                </div>

                </div>

            </div>


        




        <div className="excellence">
            <div className="excellence_container">
                <div className="headers">
                    <div className="header">THE LEGACIES OF EXCELLENCE</div>
                    <div className="subheader"><p>"Excellence in Construction: Our Vision and Mission Unite in Delivering Remarkable and Best&#32;&#32;Projects with Precision, Innovation, and Unparalleled Client Satisfaction."</p></div>
                </div>

                <div className="excellence_content">
                    <div className="e_boxes">
                        <p className="b_content">To emerge as a leader in the South
                         Indian construction landscape by offering solutions beyond customer expectations</p>
                        <div className="b_image1"></div>
                        <div className="b_head">Vision</div>
                    </div>

                    <div className="e_boxes">
                        <p className="b_content"> 
To transform our engineering excellence, construction innovation into tangible benefits for our customers.</p>
                        <div className="b_image2"></div>
                        <div className="b_head">Mission</div>
                    </div>

                    <div className="e_boxes">
                        <p className="b_content">TUnveiling Masterful Craftsmanship, and
                         an Unswerving Dedication to Client-Centricity</p>
                        <div className="b_image3"></div>
                        <div className="b_head">Excellency</div>
                    </div>


                    
                   
                </div>
            </div>

           


        </div>
    
    </>
  )
}

export default Brochere