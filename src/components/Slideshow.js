import React, { useState, useEffect } from 'react';
import '../styles/Slideshow.css';
import thumbnail1 from '../assets/thumbnail.1.jpeg';
import thumbnail2 from '../assets/thumbnail.2.jpeg';
import thumbnail3 from '../assets/thumbnail.3.jpeg';
import thumbnail5 from '../assets/thumbnail.5.jpeg';
import thumbnail6 from '../assets/thumbnail.6.jpeg';

function Slideshow() {
    const slides = [
        <img src={thumbnail1} alt="Slide 1" />,
        <img src={thumbnail2} alt="Slide 2" />,
        <img src={thumbnail3} alt="Slide 3" />,
        <img src={thumbnail5} alt="Slide 4" />,
        <img src={thumbnail6} alt="Slide 5" />,
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="slideshowContainer">
            <div className="slide">{slides[currentSlide]}</div>
        </div>
    );
}

export default Slideshow;