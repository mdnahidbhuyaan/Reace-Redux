import React from 'react'
import { MdAutoDelete } from "react-icons/md";
const TodoItem = ({todoname,tododate,onDeleteClick}) => {

  return (

      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoname}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-2">
            <button type="button " className="btn btn-danger kg-button" onClick={()=>onDeleteClick(todoname)}>
              <MdAutoDelete className="add-icon"/>
            </button>
          </div>
        </div>
      </div>
  )
}

export default TodoItem
