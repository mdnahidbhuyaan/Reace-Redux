import React from "react";

const TodoItem = ({ todoname, tododate }) => {
  return (
    <div classNameName="container">
      <div classNameName="row kg-row">
        <div classNameName="col-6">{todoname}</div>
        <div classNameName="col-4">{tododate}</div>
        <div classNameName="col-2">
          <button type="button " classNameName="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
