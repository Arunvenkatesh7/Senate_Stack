import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import './project.css'

import fomraImage1 from '../Images/Clientelle/fomra/img1.jpg';
import fomraImage2 from '../Images/Clientelle/fomra/img2.jpg';
import fomraImage3 from '../Images/Clientelle/fomra/img3.jpg';
import fomraImage4 from '../Images/Clientelle/fomra/img4.jpg';

import asviniImage1 from '../Images/Clientelle/rwd/img1.webp';
import asviniImage2 from '../Images/Clientelle/rwd/img2.webp';


import bollineniImage1 from '../Images/Clientelle/Gayathri/img1.jpg';
import bollineniImage2 from '../Images/Clientelle/Gayathri/img2.jpg';
import bollineniImage3 from '../Images/Clientelle/Gayathri/img8.png';
import bollineniImage4 from '../Images/Clientelle/Gayathri/img7.png';

import ficusImage1 from '../Images/Clientelle/chrompet/ad1.jpg';
import ficusImage2 from '../Images/Clientelle/anna/anna2.jpg';
import ficusImage3 from '../Images/Clientelle/anna/anna3.jpg';
import ficusImage4 from '../Images/Clientelle/anna/anna4.jpg';
import ficusImage5 from '../Images/Clientelle/anna/anna1.jpg';

import adayarImage1 from '../Images/Clientelle/chrompet/ad2.jpg';
import adayarImage2 from '../Images/Clientelle/chrompet/picture1.jpg';
import adayarImage3 from '../Images/Clientelle/chrompet/picture2.jpg';
import adayarImage4 from '../Images/Clientelle/chrompet/picture3.jpg'
import adayarImage5 from '../Images/Clientelle/chrompet/picture4.jpg';


import thirumangalamImage2 from '../Images/Clientelle/rajaram/img1.jpg';
import thirumangalamImage3 from '../Images/Clientelle/rajaram/img2.jpg';
import thirumangalamImage4 from '../Images/Clientelle/rajaram/img3.jpg';

import tindivanamImage1 from '../Images/Clientelle/chrompet/picture5.jpg';
import tindivanamImage2 from '../Images/Clientelle/chrompet/picture6.jpg';
import tindivanamImage3 from '../Images/Clientelle/chrompet/picture7.jpg';
import tindivanamImage4 from '../Images/Clientelle/chrompet/picture8.jpg';

import chromepetImage1 from '../Images/Clientelle/chrompet/se1.jpg';
import chromepetImage2 from '../Images/Clientelle/chrompet/se2.jpg';
import chromepetImage3 from '../Images/Clientelle/chrompet/se3.jpg';
import chromepetImage4 from '../Images/Clientelle/chrompet/se4.jpg';

import uthandiImage1 from '../Images/Clientelle/Kalaiselvi/img5.jpg';
import uthandiImage2 from '../Images/Clientelle/Kalaiselvi/img6.jpg';


import sameeraImage1 from '../Images/Clientelle/Sameera/img1.jpg';
import sameeraImage2 from '../Images/Clientelle/Sameera/img2.jpg';
import sameeraImage3 from '../Images/Clientelle/Sameera/img3.jpg';
import sameeraImage4 from '../Images/Clientelle/Sameera/img4.jpg';


import manaliImage1 from '../Images/Clientelle/g1.jpg';
import manaliImage2 from '../Images/Clientelle/g2.jpg';


import thoraiImage1 from '../Images/Clientelle/t1.jpg';
import thoraiImage2 from '../Images/Clientelle/t2.jpg';
import thoraiImage3 from '../Images/Clientelle/t3.jpg';
import thoraiImage4 from '../Images/Clientelle/t4.jpg';





const ClientPage=()=>{


// Define the project data with imported images
const projects = [
  {
    name: 'Fomra Housing, Nolambur, Mogappair',
    subheader: 'Forma Housing, renowned property developers, collaborate seamlessly with Senate Engineering, overseeing technical coordination and construction monitoring to deliver exceptional outcomes',
    images: [fomraImage1, fomraImage2, fomraImage3, fomraImage4]
  },
  {
    name: 'Asvini Atvarika, Kelambakkam',
    subheader: 'RWD, distinguished property developers, partner with Senate Engineering, ensuring precise technical coordination and vigilant construction supervision until project excellence is achieved',
    images: [asviniImage1, asviniImage2]
  },
  {
    name: 'Residential Project at Bollineni, Mambakkam, Chennai',
    subheader: 'Senate Engineering constructed a modern independent house at Bollineni, ensuring superior quality, strategic location, top-notch amenities, and client satisfaction',
    images: [bollineniImage1, bollineniImage2, bollineniImage3, bollineniImage4]
  },
  {
    name: 'Interspace Properties, Anna Nagar - Ficus',
    subheader: 'Interspace Properties, the visionary property developers, collaborate with Senate Engineering, expertly coordinating consultants and overseeing construction to project fruition',
    images: [ficusImage1, ficusImage2, ficusImage3, ficusImage4]
  },
  {
    name: 'Interspace Properties, Adayar',
    subheader: '',
    images: [adayarImage1, adayarImage2, adayarImage3, adayarImage4]
  },
  {
    name: 'Residential project at Thirumangalam, Chennai',
    subheader: 'Senate Engineering constructs Rajaram Residency, an exquisite individual home, showcasing our commitment to quality craftsmanship and architectural excellence',
    images: [thirumangalamImage2, thirumangalamImage3, thirumangalamImage4]
  },
  {
    name: 'Vetri Meenakshi Theatres, Tindivanam',
    subheader: 'Senate Engineering collaborates with Vetri Theatres, providing expert construction services for their visionary cinema project, ensuring excellence in execution.',
    images: [tindivanamImage1, tindivanamImage2, tindivanamImage3, tindivanamImage4]
  },
  {
    name: 'Vetri Theatres, Restroom Upgradation - Chromepet',
    subheader: 'Senate Engineering collaborates with Vetri Theatres, providing expert construction services for their visionary cinema project, ensuring excellence in execution.',
    images: [chromepetImage1, chromepetImage2, chromepetImage3, chromepetImage4]
  },
  {
    name: 'Independent Residential Project at Uthandi',
    subheader: 'Senate Engineering is dedicated to Kalaiselvi Residency\'s vision, crafting a personalized bungalow. Our turnkey process guarantees design precision and specification fulfillment',
    images: [uthandiImage1, uthandiImage2]
  },
  {
    name: 'Sameera Estates, Paruthipattu, Chennai',
    subheader: 'Senate Engineering partners with Sameera Estates, a leading property developer, to craft captivating entrance arch designs, showcasing architectural prowess.',
    images: [sameeraImage1, sameeraImage2, sameeraImage3, sameeraImage4]
  }
];




// Define the project data with imported images
const ongoing_projects = [
  {
    name: 'Garment Project At Manali',
    subheader: '',
    images: [manaliImage1,manaliImage2]
  },
  {
    name: 'Residential Interior At Thoraipakkam',
    subheader: '',
    images: [thoraiImage1,thoraiImage2,thoraiImage3,thoraiImage4]
  }
];





  return (
    <>

        <NavBar/>

        <div className="clientelle">
          <div className="client_container">
            <div className="client_headers">
              <div className="client_header">OUR VALUED CLIENTS : TRUSTED PARTNERS IN SUCCESS</div>
              <div className="client_subheader">Our valued clients are the driving force behind our success. Through trust and collaboration, we have achieved remarkable results together.</div>
            </div>

            {projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="project_headers">
            <div className="project_header">{project.name}</div>
            <div className="project_subheader">{project.subheader}</div>
          </div>
          <div className="pro_images">
            {project.images.map((image, imgIndex) => (
              <div
                className="pro_image"
                key={imgIndex}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        </div>
      ))}


          </div>

          <div className="ongoing_container">
          <div className="ongoing_headers">
              <div className="ongoing_header">OUR ONGOING PROJECTS</div>
              <div className="ongoing_subheader">Our valued clients are the driving force behind our success. Through trust and collaboration, we have achieved remarkable results together.</div>
          </div>

          {ongoing_projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="project_headers">
            <div className="project_header">{project.name}</div>
            <div className="project_subheader">{project.subheader}</div>
          </div>
          <div className="pro_images">
            {project.images.map((image, imgIndex) => (
              <div
                className="pro_image"
                key={imgIndex}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        </div>
      ))}

        </div>

     


        </div>

        <Footer/>
      
    </>
  )
}

export default ClientPage