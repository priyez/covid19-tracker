import React, { Component, useEffect, useState } from 'react';
import { FaGlobeEurope } from 'react-icons/fa';
import './App.css';
import axios from 'axios';
import {FaRegDotCircle} from 'react-icons/fa';


 
function Home(){ 


  const nations ={
    globeCountries:[],
    loading: true,
  }
  
  
  
  const [globeCountries, setGlobeCountries]=useState(nations)
const[globe, setGlobe]= useState([]);
const[searchCountries, setSearchCountries]=useState('');

 
 
useEffect(()=>{
  const getGlobeCountries =async() => {


    const{data}= await axios("https://disease.sh/v2/all")

    setGlobeCountries(data)
  }
  getGlobeCountries()

  

  axios
  .all ([
 axios.get("https://disease.sh/v2/countries")
])
  .then(responseArr =>{
    setGlobe(responseArr[0].data);
  })
  .catch(err =>{
    console.log(err);
  });
}, []);

const filterCountries= globe.filter(item => {
  return searchCountries !== "" ? item.country.includes
  (searchCountries) : item;
});
 
const globes=filterCountries.map((world) =>{
  return(
    <tr>
    <td className="table-state"><img className="table-flag" src={world.countryInfo.flag}/>{world.country}</td>
    <td >{world.cases}</td>
    <td>{world.recovered}</td>
    <td>{world.deaths}</td>
    </tr>
 
        );
 });


 
 
 return globeCountries.loading ?(
  <div className="load">Loading...</div>
    ):(
  
    <div className="main">
                   <div className="one">
                   <p className="live"><FaRegDotCircle   className="live-icon"/>LIVE</p>        
                      <div className="gg"><h4 className="confirm-case-g">{globeCountries.cases}</h4><p>Confirmed</p></div>
    <div className="gg"><h4 className="discharged-case-g">{globeCountries.recovered}</h4><p>Recovered</p></div>
  <div className="gg"><h4 className="Deaths-case-g">{globeCountries.deaths}</h4><p>Deaths</p></div>
                             <p className="text-g"><FaGlobeEurope   className="wrld"/>Global Stats</p>       
            </div>
  
  
  
            <div>
              <div className="sourceDiv">
              <h2 className="ca">COUNTRIES AFFECTED</h2>
              <p className="source">Sources:WHO,ECDC and various international media</p>
             
              </div>
              <input type="text" className="search" placeholder="Start search with capital letter E.g China "  onChange={e => setSearchCountries(e.target.value)}
              />
            </div>

            
            
            <table>
  <tbody> 
    <tr className="table-header">
      <td >Country</td>
      <td className="gray">Confirmed</td>
      <td className="green">Recovered</td>
      <td className="red">Deaths</td>
      </tr>     
          {globes}
          </tbody>
          </table>
                          </div>
                          
  );
}




export default Home;
