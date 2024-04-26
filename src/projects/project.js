import React, { useState } from 'react';
import './project.css';

const Project = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <>
      <h2 id='title_of'>Projects</h2>
      <div className='project-container'>
        <div className='project-card' onClick={() => handleClick(0)}>
          <img src="" alt="" />
          <div className='info'>
            <h2>Yash Mart</h2>
            <p>The main purpose of the website is to serve as an ERP system for Yash Mart. It likely facilitates variousfunctions
              related to managing products, orders, and possibly other aspects of the business operations.</p>
            <div className={`program-cards ${activeCard === 0 ? 'show' : ''}`}>
              <div className='program-card'>Reactjs</div>
              <div className='program-card'>CSS</div>
              <div className='program-card'>Javascript</div>
              <div className='program-card'><a href='https://yashmart-erp.netlify.app/'>open</a></div>
            </div>
          </div>
        </div>
        <div className='project-card' onClick={() => handleClick(1)}>
          <img src="" alt="" />
          <div className='info'>
            <h2>Alert Message Using Doctor's Prescription</h2>
            <p>Medminder App is an android application in which
              we have to upload the doctor prescription and then
              details of medicine is extracted from it</p>
            <div className={`program-cards ${activeCard === 1 ? 'show' : ''}`}>
              <div className='program-card'>Android</div>
              <div className='program-card'>Java</div>
              <div className='program-card'>OCR</div>
              <div className='program-card'><a href='https://github.com/Meghana-Rajanala/MedMinder-App'>open</a></div>
            </div>
          </div>
        </div>
        <div className='project-card' onClick={() => handleClick(2)}>
          <img src="" alt="" />
          <div className='info'>
            <h2>Skin Disease Classification  Using CNN</h2>
            <p>Skin Disease Classification using CNN involves training a Convolutional Neural Network (CNN) model to analyze
              images of skin lesions and classify them into different disease categories, aiding in the diagnosis and treatment of various skin conditions.</p>
            <div className={`program-cards ${activeCard === 2 ? 'show' : ''}`}>
              <div className='program-card'>Python</div>
              <div className='program-card'><a href='https://colab.research.google.com/drive/1s3ksQfxBpiccU9Vl2pqvkKf0cxfRPMfF'>open</a></div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Project;
