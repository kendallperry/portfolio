import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const sfsUserData =
  "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json";

const dummyData =  {
  creditorName: "AMEX",
  firstName: "Suman",
  lastName: "Tester79",
  minPaymentPercentage: 2.00,
  balance: 1234.00
};

function App() {
  const [userData, setUserData] = useState([]);
  const [checked, setChecked] = useState(
    new Array(userData.length).fill(false)
  );
  const [total, setTotal] = useState(0);

  const getJSONdata = async () => {
    const response = await axios.get(sfsUserData);
    setUserData(response.data);
  };

  useEffect(() => {
    getJSONdata();
  }, []);

  // function to make axios post request 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData(userData.concat(dummyData))
  }

  // Updates the state for which users are checked, as well as the total balance for all users
  const handleChange = (position) => {
    let updateCheckedState = checked.map((user, idx) =>
      idx === position ? !user : user
    );

    setChecked(updateCheckedState);

    let totalBalance = updateCheckedState.reduce((sum, currentValue, idx) => {
      if (currentValue === true) return sum + userData[idx].balance;
      else return sum;
    }, 0);
    console.log("total balance", totalBalance);
    console.log("userData balance", userData[0].balance);

    setTotal(totalBalance);
  };

  // console.log("user data", userData);

  const checkedAmount = checked.reduce((sum, currentVal) => {
    if (currentVal) return sum + 1;
    return sum;
  }, 0)

  return (
    <div className="App">
      <p>Strategic Financial Solutions</p>
      <p>Coding Challenge</p>
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
                      checked={checked[index]}
                      onChange={() => handleChange(index)}
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
        <button>Remove Debt</button>
        <br />
        <form onSubmit={handleSubmit}>
          <button>Add Debt</button>
        </form>
        <p>Total: {total}</p>
      </div>
      <>
        <p>Total Row Count: {userData.length}</p>
        <p>Check Row Count: {checkedAmount} </p>
      </>
    </div>
  );
}

export default App;
