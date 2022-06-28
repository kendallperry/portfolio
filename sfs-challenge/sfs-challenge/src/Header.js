import React from "react";

const Header = () => {
    return (
        <thead>
            <tr>
              <th></th>
              <th data-testid="th1">Creditor</th>
              <th data-testid="th2">First Name</th>
              <th data-testid="th3">Last Name</th>
              <th data-testid="th4">Min Pay %</th>
              <th data-testid="th5">Balance</th>
            </tr>
          </thead>
    )
};

export default Header; 
