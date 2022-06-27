import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const sfsUserData =
  "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json";

function App() {
  const [userData, setUserData] = useState([]);
  // const [checked, setChecked] = useState({});
  const [checked, setChecked] = useState(new Array(userData.length).fill(false));
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getJSONdata();
  }, []);



  // Updates the state for which users are checked, as well as the total balance for all users
  const handleChange = (position) => {
    const updateCheckedState = checked.map((user, idx) => 
      idx === position ? !user : user
    )
    setChecked(updateCheckedState);

    const totalBalance = updateCheckedState.reduce((sum, checkedState, idx) => {
      if (checkedState) {
        return sum + userData[idx].balance;
      }
      return sum;
    }, 0)

    setTotal(totalBalance);
 }

  const getJSONdata = async () => {
    const response = await axios.get(sfsUserData);
    setUserData(response.data);
  };

  console.log("user data", userData);

  return (
    <div className="App">
      <p>Strategic Financial Solutions</p>
      <p>Coding Challenge</p>
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
            <tr key={user.id}>
            <input
              type="checkbox"
              checked={checked[index]}
              onChange={() => handleChange(index)}
            />
            <td>{user.creditorName}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.minPaymentPercentage}</td>
            <td>{user.balance}</td>
          </tr>
          )
        })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>
      <>
        <p>Total Row Count: {userData.length}</p>
        <p>Check Row Count: </p>
      </>
    </div>
  );
}

export default App;
