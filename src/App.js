import React from 'react';
import './App.css';

import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  const pages = [
    'Home',
    'Projects',
    'About',
    'Contact'
  ];
  
  return (
  <div className="app">
    <Router>
      <NavBar pages={pages}/>
    
        <Routes>
          <Route 
            path='/' 
            element={<Home/>} />
            
          <Route 
          path='/projects/' 
          element={<Projects/>} />
          
          <Route 
            path='/about' 
            element={<About/>} />
            
          <Route 
            path='/contact' 
            element={<Contact/>} />
        </Routes>
    </Router>
  </div>
  );
}

export default App;
