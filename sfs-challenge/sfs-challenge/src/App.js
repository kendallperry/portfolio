import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const sfsUserData =
  "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json";

const dummyData = {
  id: 11,
  creditorName: "NYC BANK",
  firstName: "Suman",
  lastName: "Tester79",
  minPaymentPercentage: 2.5,
  balance: 1234.0,
};

function App() {
  const [userData, setUserData] = useState([]);
  const [checked, setChecked] = useState([]);
  const [total, setTotal] = useState(0);

  const getJSONdata = async () => {
    const response = await axios.get(sfsUserData);
    setUserData(response.data);
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
    console.log(deletedUser);
    if (checked.includes(deletedUser.id)) {
      setTotal(total - deletedUser.balance);
    }
    setUserData(userData.splice(0, userData.length -1));
  };

  // Updates the state for which users are checked, as well as the total balance for all users
  const handleChecked = (e, user) => {
    let updatedChecked = [...checked];
    if (e.target.checked) {
      updatedChecked = [...checked, user.id]
      setTotal(total + user.balance);
    } else {
      updatedChecked.splice(checked[user.id], 1);
      setTotal(total - user.balance);
    }
    console.log(checked);
    setChecked(updatedChecked);
  };

  
  return (
    <div className="App">
      <p>Strategic Financial Solutions</p>
      <p>Coding Challenge | Kendall Perry</p>
      <div className="tableContent">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Creditor</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Min Pay %</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => handleChecked(e, user)}
                    />
                  </td>
                  <td>{user.creditorName}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.minPaymentPercentage}</td>
                  <td>{user.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <form onSubmit={handleDelete}>
          <button>Remove Debt</button>
        </form>
        <br />
        <form onSubmit={handleSubmit}>
          <button>Add Debt</button>
        </form>
        <p>Total: {total}</p>
      </div>
      <>
        <p>Total Row Count: {userData.length}</p>
        <p>Check Row Count: {checked.length} </p>
      </>
    </div>
  );
}

export default App;
