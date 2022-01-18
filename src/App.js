import React from 'react';
import './App.css';
import ScrollToTop from './ScrollToTop';
import Navbar from  './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

import Trip from './components/pages/Trip/Trip';

import NewHome from './components/pages/HomePage/NewHome';
import City from './components/pages/City/City';
// import signUp from './components/pages/Trip/RouteInfo';


function App() {
  
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path='/trip'exact component={Trip} />
        <Route path='/' exact component={NewHome} />
        <Route path='/city/:cityname' component={City} />
        {/* <Route path='/sign-up' exact component={signUp} /> */}

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;