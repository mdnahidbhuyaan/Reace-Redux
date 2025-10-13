/* eslint-disable no-unused-vars */
import React from "react";

const TodoItem1 = () => {
  let todoname = "Buy Milk";
  let tododate = "4/10/2023";
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button " className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
