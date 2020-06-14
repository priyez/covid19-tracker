import React, {  useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import flag from './naija.png';
import axios from 'axios';
import {FaRegDotCircle} from 'react-icons/fa';





function Nigeria() {
  const initialUserState ={
    user:[],
    loading: true,
  }
  
  
  const [user, setUser]=useState(initialUserState)
  const[nstate, setNstate] =useState([]);
  
  

useEffect(()=>{
  const getUser =async() => {

    const{data}= await axios("https://disease.sh/v2/countries/nigeria")

    setUser(data)
  }
  getUser()

  
  axios
  .all([
  // axios.get("https://disease.sh/v2/countries/nigeria"),
  axios.get("https://disease.sh/v2/gov/nigeria")
])


  .then(responseArr =>{
    // setNaija(responseArr[0].data);
    setNstate(responseArr [0].data);
  })
  .catch(err =>{
    console.log(err);
  });
 
}, []);


  
  
const nstates=nstate.map(data =>{
 return(
             
<tr>
 <td className="table-state">{data.state}</td>
 <td>{data.cases}</td>
 <td>{data.recovered}</td>
 <td>{data.deaths}</td>
 
</tr>


 );
});
  
  
  
  return user.loading ?(
<div className="load">Loading...</div>
  ):(
    <div className="main">
                   <div className="one">       
                   <p className="live"><FaRegDotCircle   className="live-icon"/>LIVE</p>
                  
       <div className="tt"><h4 className="confirm-case">{user.cases}</h4><p>Confirmed</p></div>
                               <div className="tt"><h4 className="discharged-case">{user.recovered}</h4><p>Recovered</p></div>
                             <div className="tt"><h4 className="Deaths-case">{user.deaths}</h4><p>Deaths</p></div>
                             <p className="text-h"><img src={flag} alt='wash' className="naijaflag" /> Nigeria Stats</p>
            </div>
    
    
            <div className="sourceDiv">
              <p className="source">Source:NCDC(Nigeria Centre for Disease Control)</p>
             
              </div>
  
  
            <table className="naija">
  <tbody> 
    <tr className="table-header">
      <td>State</td>
      <td className="gray">Confirmed</td>
      <td className="green">Recovered</td>
      <td className="red">Deaths</td>
      </tr>     
          {nstates}
          <div className="credit">#StafeSafe </div>
          </tbody>
          </table>
         
                          </div>

  
  );
  
}



export default Nigeria;
