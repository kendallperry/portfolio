import React from 'react';
import { useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About'
import AllProjects from './components/AllProjects';
import Skills from './components/Skills';
import Contact from './components/Contact'

function App() {

  const [currentPage, setCurrentPage] = useState('About');
  const updatePage = (page) => setCurrentPage(page);

  return (
  <div className="App">
    <NavBar updatePage={updatePage}/>
    {currentPage === 'Home' ? < Home /> : null}
    {currentPage === 'About' ? <About /> : null}
    {currentPage === 'Projects' ? <AllProjects /> : null}
    {currentPage === 'Skills' ? <Skills /> : null}
    {currentPage === 'Contact' ? <Contact /> : null}
  </div>
  );
}

export default App;
