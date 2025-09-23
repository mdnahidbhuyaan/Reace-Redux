/* eslint-disable no-unused-vars */
import React from 'react'
import TodoItem from './TodoItem'
const TodoItems = ({todoItems}) => {
  return (
        <div className="items-container">
        <TodoItem tododate={"4/10/2023"} todoname={"Buy Milk"}/>
        <TodoItem tododate={"4/10/2023"} todoname={"Go to Collage"}/>
     
     
      </div>
  )
}

export default TodoItems
