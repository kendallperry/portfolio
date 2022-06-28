import React from "react";

const TotalAmounts = (props) => {
  return (
    <>
      <div className="total">
        <p>Total:</p>
        <p data-testid="totalNum">${props.total.toFixed(2)}</p>
      </div>
      <div className="rowCount">
        <p data-testid="totalRowCount">Total Row Count: {props.userData.length}</p>
        <p data-testid="totalChecked">Check Row Count: {props.checked.length}</p>
      </div>
    </>
  );
};

export default TotalAmounts;
