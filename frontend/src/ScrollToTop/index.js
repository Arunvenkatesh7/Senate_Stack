// ScrollToTop.js
import React, { useEffect, useState } from 'react';
import { RiArrowUpLine } from "@remixicon/react";
import './scroll.css'; // Create a CSS file for the button styles

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && 
                <div className="scroll-to-top">
                    <div onClick={scrollToTop}>
                        <RiArrowUpLine />
                    </div>
                </div>
            }
        </>
    );
}

export default ScrollToTop;
