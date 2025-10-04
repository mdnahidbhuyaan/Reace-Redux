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
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElements}
            placeholder="Enter Todo Here"
    
        
          />
        </div>
        <div className="col-4">
          <input type="date"

      
           ref={dueDateElements}
             />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAddCircleOutline className="add-icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
