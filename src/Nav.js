import React from 'react';
import { Link } from 'react-router-dom';
 import { FaHome } from 'react-icons/fa';
 import { FaGlobeEurope } from 'react-icons/fa';
 import { FaInfoCircle } from 'react-icons/fa';
import prevent from './mask.png';
import flag from './naija icon.png';

import './App.css';
import { FaHeartbeat } from 'react-icons/fa';

function Nav() {
    return (
        <nav>
      <ul className="nav-links">
          <Link to="/"><li className="hom">< FaHome /><p className="iconp">Global Stats</p></li></Link>
          <Link to="/Nigeria"><li className="hom"><img src={flag} alt='wash' className="stp" /><p className="iconp">Nigeria Stats</p></li></Link>
          <Link to="/symptoms"><li className="hom">< FaHeartbeat /><p className="iconp">Symptoms</p></li></Link>
          <Link to="/prevention"><li className=""><img src={prevent} alt='wash' className="stp" /><p className="iconp">Prevention</p></li></Link>
          
      </ul>
      </nav>
    );
  }

export default Nav;
