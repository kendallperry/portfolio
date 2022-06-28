import React from "react";

const TableBody = (props) => {
  return (
    <tbody>
      {props.userData.map((user, index) => {
        return (
          <tr key={index}>
            <td data-testid="checkboxInput">
              <input
                type="checkbox"
                onChange={(e) => props.handleChecked(e, user)}
              />
            </td>
            <td>{user.creditorName}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.minPaymentPercentage.toFixed(2)}%</td>
            <td>{user.balance.toFixed(2)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
