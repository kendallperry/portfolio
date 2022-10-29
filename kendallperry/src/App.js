import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import Animation from './components/Animation';
import About from './components/About'
import AllProjects from './components/AllProjects';
import Skills from './components/Skills';
import Contact from './components/Contact'

function App() {
  return (
  <div className="App">
    <NavBar/>
    {/* <Animation /> */}
    <About />
    <AllProjects />
    <Skills />
    <Contact />
  </div>
  );
}

export default App;
