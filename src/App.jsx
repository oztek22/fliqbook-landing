import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import Features from './components/pages/features';
import Pricing from './components/pages/pricing';
import Contact from './components/pages/contact';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    );
  }
}

export default App;
