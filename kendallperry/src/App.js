import React from 'react';
import { useState, setState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About'
import AllProjects from './components/AllProjects';
import Skills from './components/Skills';
import Contact from './components/Contact'

function App() {

  const [currentPage, setCurrentPage] = useState('About');
  // // About, Projects, Skills

  const updatePage = (page) => setCurrentPage(page);

  return (
  <div className="App">
    <NavBar updatePage={updatePage}/>
    {currentPage === 'About' ? <About /> : null}
    {currentPage === 'Projects' ? <AllProjects /> : null}
    {currentPage === 'Skills' ? <Skills /> : null}
    <Contact />
  </div>
  );
}

export default App;
