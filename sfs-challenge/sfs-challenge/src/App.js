import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

const sfsUserData = "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getJSONdata();
  }, []);

  const getJSONdata = async () => {
    const response = await axios.get(sfsUserData);
    console.log("USER DATA", response);
  }

  return (
    <div className="App">
      <p>Strategic Financial Solutions</p>
      <p>Coding Challenge</p>
    </div>
  );
}

export default App;
