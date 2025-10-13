import React from "react";
import { MdAutoDelete } from "react-icons/md";
const TodoItem = ({ todoname, tododate, onDeleteClick }) => {
  return (
    <div classNameName="container">
      <div classNameName="row kg-row">
        <div classNameName="col-6">{todoname}</div>
        <div classNameName="col-4">{tododate}</div>
        <div classNameName="col-2">
          <button
            type="button "
            classNameName="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoname)}
          >
            <MdAutoDelete classNameName="add-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
