import React, { useState } from "react";
import './styles.css';  // Import the CSS file

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  transition:"all .6s ease",
  backgroundRepeat:"no-repeat",
};

const arrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  transition:"all .6s ease"
};

const sliderStyles = {
  position: "relative",
  height: "100%",
  transition:"all .6s ease"
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  transition:"all .6s ease"
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  transition:"all .6s ease"
};

const titleStyles = {
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  color: "#fff",
  fontSize: "24px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "5px 10px",
  borderRadius: "5px",
  width:"auto",
  
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="slider-container" style={sliderStyles}>
      <div onClick={goToPrevious} className="arrow" style={{ ...arrowStyles, left: "32px" }}>
        ❰
      </div>
      <div onClick={goToNext} className="arrow" style={{ ...arrowStyles, right: "32px" }}>
        ❱
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div className="title" style={titleStyles}>{slides[currentIndex].title}</div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            className="dot"
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
