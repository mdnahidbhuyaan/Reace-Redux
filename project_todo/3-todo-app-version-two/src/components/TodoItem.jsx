import React from 'react'

const TodoItem = ({todoname,tododate}) => {

  return (

      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoname}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-2">
            <button type="button " class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
  )
}

export default TodoItem
