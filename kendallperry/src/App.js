import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import Header from './components/Header'
import About from './components/About'
import AllProjects from './components/AllProjects';
import Skills from './components/Skills';
import Contact from './components/Contact'

function App() {
  return (
  <div className="App">
    <NavBar/>
    {/* <Header /> */}
    <About />
    <AllProjects />
    <Skills />
    <Contact />
  </div>
  );
}

export default App;
