import React from 'react';
import '../styles/Footer.css';
import thumbnail4 from '../assets/thumbnail.4.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <a href="/link1" className="footer-link">Link 1</a>
                <a href="/link2" className="footer-link">Link 2</a>
                <a href="/link3" className="footer-link">Link 3</a>
            </div>
            <div className="footer-right">
                <span className="copyright">&copy;2023 NRL United</span>
                <img src={thumbnail4} alt="Company Logo" className="footer-logo" />
            </div>
        </div>
    );
}

export default Footer;