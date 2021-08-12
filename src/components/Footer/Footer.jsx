import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding: 150}}>
                <div className="footer-nav">
                    <h4> &copy; 2021 dCC Library </h4>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;