import React, {  useEffect, useState } from 'react';
import stayHome from './download.gif';
import './App.css';


function prevention() {


    return (
      <div>
        <div className="preventDiv">
        <img src={stayHome} alt='facemask' className="wash" />
        <div className="preh">
          <h1>Stay Home</h1>
          <h1>Save lives</h1>
        </div>
        <ul className="preorder">
          <li>1<p><strong>STAY</strong> home as much as you can</p></li>
          <li>2<p><strong>KEEP</strong> a safe distance</p></li>
          <li>3<p><strong>WASH</strong> hands ofen</p></li>
          <li>4<p><strong>COVER</strong> your cough</p></li>
          <li>5<p><strong>SICK ?</strong> Call ahead</p></li>
        </ul>
        </div>
       

      </div>
    );
  }

export default prevention;