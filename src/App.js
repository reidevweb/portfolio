import React from 'react';
import './App.css';

import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import Featured from './pages/featured';

function App() {
  const pages = {
    Home: [],
    Projects: ['Gallery', 'Featured'],
    About: [],
    Contact: []
  };
  
  return (
  <div className="app">
    <Router basename="/portfolio">
      <NavBar pages={pages}/>
    
        <Routes>
          <Route 
            path='/' 
            element={<Home/>} />
            
          <Route 
          path='/projects/' 
          element={<Featured/>} />
          
          <Route 
          path='/projects/gallery' 
          element={<Projects/>} />
          
          <Route 
          path='/projects/featured' 
          element={<Featured/>} />
          
          <Route 
            path='/about' 
            element={<About/>} />
            
          <Route 
            path='/contact' 
            element={<Contact/>} />
          
          <Route 
            path='/featured' 
            element={<Featured/>} />
        </Routes>
    </Router>
  </div>
  );
}

export default App;
