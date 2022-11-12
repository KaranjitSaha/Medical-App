import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className = "footer">
            <div className='footer-p1' >
                <div className="footer-title">MedReports</div>
                <div className="footer-address">
                IIIT Bangalore, 26/C, Hosur Rd, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100
                </div>
            </div>

            <div className="footer-p2">
                    <div style={{fontWeight: 'bold'}}>Go to</div>
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Features</div>
                    <div>Testimonials</div>
            </div>

            <div className="footer-p2">
                <div>+626564465455</div>
                <div>info@MedReports.com</div>
                <div>Telp: +5646544654</div>
            </div>
            

        </div>
        
    )
}

export default Footer;