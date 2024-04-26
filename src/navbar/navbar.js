import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../navbar/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      <img src="/MRlogo.png" alt="Logo" />
      <button className="toggle-nav" onClick={toggleNav}>
        &#9776;
      </button>
      <ul className={`nav-link ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={toggleNav}>Home</Link>
        </li>
        <li>
          <Link to="aboutme" smooth={true} duration={500} onClick={toggleNav}>About Me</Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500} onClick={toggleNav}>Portfolio</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={toggleNav}>Skills</Link>
        </li>
        
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={toggleNav}>Projects</Link>
        </li>
       
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleNav}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
