import React from "react";

const Buttons = (props) => {
  return (
    <div className="buttons">
      <form onSubmit={props.handleDelete}>
        <button data-testid="deleteButton">Remove Debt</button>
      </form>
      <form onSubmit={props.handleSubmit}>
        <button data-testid="addButton">Add Debt</button>
      </form>
    </div>
  );
};

export default Buttons;
