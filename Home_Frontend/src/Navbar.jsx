import { useEffect, useState } from "react";
import './Navbar.css';
import logo from './images/logo.svg';
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          <ScrollLink to="section1" smooth={true} duration={800} className="logo">
            <img src="https://companieslogo.com/img/orig/4704.T_BIG.D-daec07bf.png?t=1660548193" width={80} height={30} />
          </ScrollLink>
          <ul className="menu-items">
            <li>
              <ScrollLink to="section1" smooth={true} duration={800}>Home</ScrollLink>
            </li>
            <li>
              <ScrollLink to="section2" smooth={true} duration={800}>Flavours</ScrollLink>
            </li>
            <li>
              <ScrollLink to="section3" smooth={true} duration={800}>Upcoming</ScrollLink>
            </li>
            <li>
              <ScrollLink to="section4" smooth={true} duration={800}>On Demand</ScrollLink>
            </li>
            <li>
              <ScrollLink to="section5" smooth={true} duration={800}>FAQs</ScrollLink>
            </li>
            <li>
              <button className="contactbutton"><ScrollLink to="section6" smooth={true} duration={800}>Contact us</ScrollLink></button>
            </li>
            <li>
              <ScrollLink to="section1" smooth={true} duration={800} className="logo">
                <img src="https://companieslogo.com/img/orig/4704.T_BIG.D-daec07bf.png?t=1660548193" width={80} height={30} />
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
