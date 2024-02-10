import { useEffect,useState } from "react"
import './Navbar.css';
import logo from './images/logo.svg';
import { Link } from "react-router-dom";
export function Navbar(){
    return(       
   
 <>
  <nav className="navbar"> 
    <div className="navbar-container container">
      <input type="checkbox" name="" id="" />
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <ul className="menu-items">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <a href="/Home" className="logo"><img src={logo} width={50} height={50} /></a>
    </div>
  </nav>
</>
      
      
         
    )
}
