import React from 'react';
import './education.css'; // Import the CSS file

const Education = () => {
  return (
    <>
     <section className="education-content" id="education">
        <div className="container">
          <h2>Portfolio</h2>
            <div className="row">
                <div className="education ">
                    <h3 className="title">Education</h3>
                    <div className="row">
                        <div className="timeline-box">
                            <div className="timeline1">

                               
                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-title">Andhra Loyola Institute of Engineering and Technology  
                                    </h3>
                                    <h3 className="timeline-title">
                                        Bachelor Of Technology
                                    </h3>
                                    <h4 className="timeline-title">2023 | Vijayawada,Andhra Pradesh</h4>
                                    
                                    <li className="timeline-text">
                                    I have completed my bachelor degree in computer science & Engineering with 8.10 CGPA.
                                    </li>
                                </div> 
                               
                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-title">Narayana Junior College 
                                    </h3>
                                    <h3 className="timeline-title">Intermediate</h3>
                                    <h4 className="timeline-title">2019 | Vijayawada,Andhra Pradesh</h4>
                                    <li className="timeline-text">
                                    In the intermediate, Main subjects are PCM  and get grade of 9.86 CGPA then additional subjects are Hindi and English and Sanskrit.
                                    </li>
                                </div>
                                
                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-title">Don Bosco Public School 
                                    </h3>
                                    <h3 className="timeline-title">
                                        10th
                                    </h3>
                                    <h4 className="timeline-title"> 2017 | Vijayawada,Andhra Pradesh</h4>
                                    <li className="timeline-text">
                                         I did my SSC with 9.3 CGPA.
                                    </li>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="internship">
                    <h3 className="title">Internship</h3>
                    <div className="row">
                        <div className="timeline-box">
                            <div className="timeline1">
                                
                                
                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-title">
                                    Salesforce Administrator Intern
                                    </h3>
                                    <h4 className="timeline-title"> SmartInternz</h4>
                                    <h4 className="timeline-title">
                                        <i className="fa fa-calendar"></i> May-2023 to Jun-2023
                                    </h4>
                                    <li className="timeline-text">I completed comprehensive training in Salesforce Fundamentals, Process Automation, Data Management, 
                                    and related modules, gaining a thorough understanding of Salesforce functionalities and their practical 
                                    applications in business and data management. 
                                    </li>
                                </div> 
                               
                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-title">Web Development Intern  
                                    </h3>
                                    <h4 className="timeline-title">Oasis Infobyte
                                    </h4>
                                    <h4 className="timeline-title">
                                        <i className="fa fa-calendar"></i> Jan-2023 to Mar-2023
                                    </h4>
                                    <li className="timeline-text">I have develop three website. First one is Landing Page after that i have developed Calculator and To-Do List App and vice versa.
                                      The mainly focused on css styling and design part for any websites.</li>
                                </div>

                               
                                 <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-title">Machine Learning Intern 
                                    </h3>
                                    <h4 className="timeline-title"> Indian Servers
                                    </h4>
                                    <h4 className="timeline-title">
                                        <i className="fa fa-calendar"></i> Jun-2022 to Oct-2022
                                    </h4>
                                    <li className="timeline-text">During my internship at Indian Servers as a Machine Learning Intern, I successfully executed a project 
                                        focused on 'Skin Disease Classification”. Utilized convolutional neural networks (CNN) to develop a model 
                                        for proficiently classifying various human skin diseases using image datasets.</li>
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Education;
