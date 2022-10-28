import React from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import AllProjects from './components/AllProjects';
import Links from './components/Links'

function App() {
  return (
  <div className="App">
    <Header />
    <About />
    <AllProjects />
    <Links />
  </div>
  );
}

export default App;
