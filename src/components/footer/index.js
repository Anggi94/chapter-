import React from 'react';
import './style.css';
import Facebook from './assets/icon_facebook.png';
import Instagram from './assets/icon_instagram.png';
import Twitter from './assets/icon_twitter.png';
import Email from './assets/icon_mail.png';
import Twitch from './assets/icon_twitch.png';
import Footerlogo from './assets/footerlogo.png';
const Footer = () => {
    return (
      <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="address">
              <h4>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h4>
              <h4>binarcarrental@gmail.com</h4>
              <h4>081-233-334-808</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <ul className="nav-footer">
              <li>
                <a href="#our-services">Our Services</a>
              </li>
              <li>
                <a href="#why-us">Why Us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul> 
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="info-binar">
              <h4>Connect with us</h4>
              <a href="https://www.facebook.com/binaracademy/">
                <img src={Facebook} alt="" />
              </a>
              <a href="https://www.instagram.com/academybinar/">
                <img src={Instagram} alt="" />
              </a>
              <a href="https://twitter.com/academybinar">
                <img src={Twitter} alt="" />
              </a>
              <a href="info@binar.co.id">
                <img src={Email} alt="" />
              </a>
              <a href="https://m.twitch.tv/">
                <img src={Twitch} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="copyright">
              <h4>&copy; Copyright Binar 2022</h4>
              <img src={Footerlogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
};
export default Footer;