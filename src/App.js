import React from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Navbar from './navbar/navbar.js';
import HomePage from './HomePage.js';
import Skills from './skills/skills.js';
import Education from './education/education.js';

import Project from './projects/project.js';
import Contact from './contact/contact.js';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      
      <section id="home" className="section">
        <HomePage />
      </section>
      <hr />
      <section id="aboutme" className="section">
        <AboutMe />
      </section>
      <hr />
      <section id="education" className="section">
        <Education />
      </section>
      <hr />
      <section id="skills" className="section">
        <Skills />
      </section>
      <hr />
      <section id="projects" className="section">
        <Project />
      </section>
      <hr />
     
      <section id="contact" className="section">
        <Contact />
      </section>
      <hr />
      <footer className="container-footer">
        <h4>Done By Meghana Rajanala <span className="heart">&hearts;</span> </h4>
      </footer>
    </div>
  );
}

export default App;



