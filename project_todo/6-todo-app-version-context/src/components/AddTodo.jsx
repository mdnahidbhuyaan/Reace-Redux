import React from "react";
import { useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const AddTodo = ({ onNewItem }) => {
  const todoNameElements = useRef();
  const dueDateElements = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElements.current.value;
    const dueDate = dueDateElements.current.value;
    todoNameElements.current.value = "";
    dueDateElements.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div classNameName="container text-center">
      <form classNameName="row kg-row" onSubmit={handleAddButtonClick}>
        <div classNameName="col-6">
          <input
            type="text"
            ref={todoNameElements}
            placeholder="Enter Todo Here"
          />
        </div>
        <div classNameName="col-4">
          <input type="date" ref={dueDateElements} />
        </div>
        <div classNameName="col-2">
          <button type="submit" classNameName="btn btn-success kg-button">
            <IoMdAddCircleOutline classNameName="add-icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
