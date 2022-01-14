import React from 'react';
import './App.css';
import Navbar from  './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/pages/HomePage/Home';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;