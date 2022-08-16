import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Router from './Components/Router';
import ServicesDetials from './Components/ServicesDetials';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Router/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/services/:serviceDetail' element={<ServicesDetials/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
