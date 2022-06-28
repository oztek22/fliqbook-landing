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
        <Route path='/features' element={<Features feature={1} />} />
        <Route path='/features/1' element={<Features feature={1} />} />
        <Route path='/features/2' element={<Features feature={2} />} />
        <Route path='/features/3' element={<Features feature={3} />} />
        <Route path='/features/4' element={<Features feature={4} />} />
        <Route path='/features/5' element={<Features feature={5} />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    );
  }
}

export default App;
