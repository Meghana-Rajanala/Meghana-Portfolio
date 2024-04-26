import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <>
    <div className="divider"></div>
    <div className='skillcontainer'>
      <div className="skills-container">
        <h2>SKILLS</h2><br/>
      </div>
      <div className="card-container">
      
        <div className="card">
          <img src="./python.png" alt="Python" />
          <h4>Python</h4>
        </div>
        <div className="card">
          <img src="./c.png" alt="C" />
          <h4>C</h4>
        </div>
        <div className="card">
          <img src="./c++.png" alt="C++" />
          <h4>C++</h4>
        </div>
        <div className="card">
          <img src="./java-script.png" alt="javascript" />
          <h4>JavaScript</h4>
        </div>
        <div className="card">
          <img src="./mysql.png" alt="mysql" />
          <h4>MySQL</h4>
        </div>
        <div className="card">
          <img src="./logo512.png" alt="reactjs" />
          <h4>ReactJs</h4>
        </div>
        <div className="card">
          <img src="./salesforce.png" alt="Salesforce" />
          <h4>Salesforce</h4>
        </div>
      </div>
      </div>
    </>
  );
};

export default Skills;
