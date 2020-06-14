import React from 'react';
import './App.css';
import cough from './light_cough.gif';
import tired from './light_tiredness.gif';
import fever from './light_fever.gif';
import axios from 'axios';
import covid19 from './covid.png';



function symptoms() {

  return (

        <div>
        <div className="preventDiv">
        <img src={covid19} alt='facemask' className="wash" />
      
        <div className="symDiv">
        <div className="symicon">
        <div className="ss"><h4 className="confirm-case"><img src={cough} alt='wash' className="symicon" /></h4><p>Cough</p></div>
        <div className="ss"><h4 className="discharged-case"><img src={tired} alt='wash' className="symicon" /></h4><p>Tiredness</p></div>
        <div className="ss"><h4 className="Deaths-case"><img src={fever} alt='wash' className="symicon" /></h4><p>Fever</p></div>
    </div>
        <p className="symmain">Other symptoms that are less common and may affect some patients includes: </p>
             <li>aches and pains</li>
          <li>sore throat</li>
           <li>diarrhoea</li>
           <li>loss of taste or smell</li>
         <li>conjunctivitis</li>
            <li>a rash on skin, or discolouration of fingers or toes</li>
<p>These symptoms are usually mild and begin gradually. Some people become infected but only have very mild symptoms.</p>
        </div>
        </div>
       
     
    <button className="about-button">#StafeSafe</button>
          <a/>
      </div>
  );
}
export default symptoms;