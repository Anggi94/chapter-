import React, { useState } from 'react';
import './style.css';
import Logo from './assets/logo.png';
import Menu from './assets/bar.png';
import CloseButton from './assets/fi_x.png';
const Header = () => {
  const [active, setActive] = useState(false);

  const openSidebar = () => {
    setActive(true);
  };

  const closeSidebar = () => {
    setActive(false);
  };

  return (
    <div className="homepage">
      <header className="header-nav">
        <div className="container">
          <div className="row">
            <a href="#hero-section" className="logo">
              <img src={Logo} alt="" />
            </a>
            <div className={`overlay-bg ${active ? 'navbar-active' : ''}`} />
            <div className={`sidebar ${active ? 'navbar-active' : ''}`}>
              <div className="top-sidebar">
                <h5>BCR</h5>
                <div className="close-button" onClick={closeSidebar}>
                  <img className="" src={CloseButton} alt="" />
                </div>
              </div>
              <ul className="navbar">
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
            <div className="overlay-bg"></div>
            <div className="burger-icon" onClick={openSidebar}>
              <img src={Menu} alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
