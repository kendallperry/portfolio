import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const sfsUserData =
  "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json";

const dummyData = {
  creditorName: "NYC BANK",
  firstName: "Suman",
  lastName: "Tester79",
  minPaymentPercentage: 2.5,
  balance: 1234.0,
};

//new Array(userData.length).fill(false)

function App() {
  const [userData, setUserData] = useState([]);
  const [checked, setChecked] = useState([]);
  const [total, setTotal] = useState(0);
  // const [numChecked, setNumChecked] = useState(0);

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
    setUserData(userData.splice(0, userData.length -1));
  };

  // Updates the state for which users are checked, as well as the total balance for all users
  const handleCheck = (e) => {
    let updatedChecked = [...checked];
    if (e.target.checked) {
      updatedChecked = [...checked, e.target.value]
    } else {
      updatedChecked.splice(checked[e.target.value], 1);
    }

    setChecked(updatedChecked);

    // let updateCheckedState = checked.map((user, idx) =>
    //   idx === position ? !user : user
    // );

    // setChecked(updateCheckedState);

    // let totalBalance = updateCheckedState.reduce((sum, currentValue, idx) => {
    //   if (currentValue === true) return sum + userData[idx].balance;
    //   else return sum;
    // }, 0);
    // console.log("total balance", totalBalance);
    // console.log("userData balance", userData[0].balance);

    // setTotal(totalBalance);
  };

  // console.log("user data", userData);
  console.log('checked state', checked);
  

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
                     // value={user}
                      type="checkbox"
                      //checked={checked[index]}
                      onChange={handleCheck}
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
