import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import symptoms from './symptoms';
import Nav from './Nav';
import Nigeria from './Nigeria';
import prevention from './prevention';
import './App.css';
import covid19 from './covid.png';


  function App () {
    return (
     
      <Router>
      <div>
      <header>
                <h1>C<img src={covid19} alt='logo' className="log" />vid19<h1 className="tracker">TRACKER</h1></h1>
       </header>
        <Nav />
          <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/symptoms" component={symptoms}/>
        <Route path="/prevention" component={prevention}/>
        <Route path="/Nigeria" component={Nigeria}/>
        </Switch>
      </div>
      </Router>
    );
  }
  

export default App;
