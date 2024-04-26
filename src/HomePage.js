import React from 'react';


const HomePage = () => {
  return (
    <>
     
        <div className="homeContent"  id="home">
          
            <div className="homecontent1">
                <h1>Hello,My Name is</h1>
                <h2 className="name">
                    <span>Rajanala Sai Venkata Meghana</span>  
                  </h2>
                  <p>I'm an Front-End Developer <span> & </span> ML/AI  Enthusiast.</p><br/>
                  <a href="/Resume 1.pdf" className="custom-btn" download="Rajanala_SaiVenkataMeghana_Resume.pdf">Download Resume</a>

                  
            </div>
            <div className="homecontent2">
            <img src="./m1.png" alt="Salesforce" />
            </div>
        </div>

</>
  );
};
export default HomePage;