import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const sfsUserData =
  "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getJSONdata();
  }, []);

  const getJSONdata = async () => {
    const response = await axios.get(sfsUserData);
    setUserData(response.data);
    console.log("USER DATA", userData);
  };

  return (
    <div className="App">
      <p>Strategic Financial Solutions</p>
      <p>Coding Challenge</p>
      <table>
        <thead>
          <tr>
            <th>Creditor</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Min Pay %</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
        {userData.map((user) => {
          return <tr key={user.id}>
            <td>{user.creditorName}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.minPaymentPercentage}</td>
            <td>{user.balance}</td>
          </tr>
        })};
        </tbody>
      </table>
    </div>
  );
}

export default App;
