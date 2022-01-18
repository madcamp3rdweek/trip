import React from 'react';
import './App.css';
import ScrollToTop from './ScrollToTop';
import Navbar from  './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NewHome from './components/pages/HomePage/NewHome';
import City from './components/pages//City/City';

function App() {
  
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={NewHome} />
        <Route path='/city/:cityname' component={City} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;