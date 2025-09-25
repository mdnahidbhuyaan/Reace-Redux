import React from 'react'
import TodoItem from './TodoItem'
import styles from './TodoItems.module.css'
const TodoItems = ({todoItems}) => {
  return (
        <div className={styles.itemsContainer}>
           {todoItems.map(item => <TodoItem todoDate={item.deoDate} todoname={item.name}/>)}
      
     
     
      </div>
  )
}

export default TodoItems
