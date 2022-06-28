import "./App.css";
import Header from "./Header";
import Buttons from "./Buttons";
import TableBody from "./TableBody";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { JSON_DATA_URL, dummyData } from "./setupInfo";

function App() {
  const [userData, setUserData] = useState([]);
  const [checked, setChecked] = useState([]);
  const [total, setTotal] = useState(0);

  const getJSONdata = async () => {
    const { data } = await axios.get(JSON_DATA_URL);
    setUserData(data);
  };

  useEffect(() => {
    getJSONdata();
  }, []);

  // Handles adding a row to table with dummy data.
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(userData.concat(dummyData));
  };

  // Handles deleting most recent row from table
  const handleDelete = (e) => {
    e.preventDefault();
    let deletedUser = userData[userData.length - 1];
    if (checked.includes(deletedUser.id)) {
      setTotal(total - deletedUser.balance);
    }
    setUserData(userData.splice(0, userData.length - 1));
  };

  // Updates the state for which users are checked, as well as the total balance for all users
  const handleChecked = (e, user) => {
    let updatedChecked = [...checked];
    if (e.target.checked) {
      updatedChecked = [...checked, user.id];
      setTotal(total + user.balance);
    } else {
      updatedChecked.splice(checked[user.id], 1);
      setTotal(total - user.balance);
    }
    setChecked(updatedChecked);
  };

  return (
    <div className="App">
      <h3 data-testid="header">Strategic Financial Solutions</h3>
      <h4>Coding Challenge | Kendall Perry</h4>
      <div className="tableContent">
        <table>
          <Header />
          <TableBody userData={userData} handleChecked={handleChecked} />
        </table>
          <Buttons handleDelete={handleDelete} handleSubmit={handleSubmit} />
        </div>
        <div className="total">
          <p>Total:</p>
          <p data-testid="totalNum">${total.toFixed(2)}</p>
        </div>

        <div className="rowCount">
          <p data-testid="totalRowCount">Total Row Count: {userData.length}</p>
          <p data-testid="totalChecked">Check Row Count: {checked.length}</p>
        </div>
      </div>
  );
}

export default App;
