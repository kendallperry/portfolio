import React from 'react';

const Table = () => {
    return (
        <tbody>
            {this.props.userData.map((user, index) => {
              return (
                <tr data-testid="userRow" key={index}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => this.props.handleChecked(e, user)}
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
    )
};

export default Table; 