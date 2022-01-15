import React from 'react';
import './App.css';
import Navbar from  './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NewHome from './components/pages/HomePage/NewHome';
import City from './components/pages/City';

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={NewHome} />
        <Route path='/city' component={City} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;