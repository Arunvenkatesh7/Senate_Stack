import React from "react";
import ImageSlider from "./ImageSlider";
import './styles.css';  // Import the CSS file
import './bs.css'

const BootSlider = () => {
  const slides = [
    { url: require('../Images/Clientelle/img2.jpg'), title: "Residential Project at Bollineni" },
    { url: require('../Images/Clientelle/img3.jpg'), title: "Fomra Housing,Mogappair" },
    { url: require('../Images/Clientelle/Kalaiselvi/img6.jpg'), title: "Residential Project at Uthandi" },
    { url: require('../Images/Clientelle/rwd/img2.webp'), title: "Asvini Atvarika,Kelambakkam" },
    { url: require('../Images/trh3.jpg'), title: "Residential Interior,Thoraipakkam" },
  ];

  const containerStyles = {
    width: "900px",
    height: "400px",
    margin: "0 auto",
    
  };

  const containerStylesMobile = {
    width: "370px",
    height: "200px",
    margin: "0 auto",
    backgroundColor: 'skyblue',
  };

  return (
    <div>
    <div className="bs">

      <div className="bs_headers">
        <div className="bs_header">ARCHITECTURAL MARVELS: PUSHING BOUNDARIES OF DESIGN</div>
        <div className="bs_subheader">Delve into a world of architectural marvels that push the boundaries of design and innovation. Our gallery showcases iconic structures that captivate the imagination, blending aesthetics with practicality.</div>
      </div>

    <div className="bs_content">

      <div style={window.innerWidth <= 767 ? containerStylesMobile : containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      </div>
      </div>
    </div>
  );
};

export default BootSlider;
