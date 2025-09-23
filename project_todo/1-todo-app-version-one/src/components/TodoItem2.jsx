import React from 'react'

const TodoItem2 = () => {
    let todoname = "Go to Collage";
    let tododate = "4/10/2023";
  return (
    <div class="container">
        <div class="row kg-row">
          <div class="col-6">{todoname}</div>
          <div class="col-4">{tododate}</div>
          <div class="col-2">
            <button type="button " class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
  )
}

export default TodoItem2
