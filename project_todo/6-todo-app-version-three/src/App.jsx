/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMassage from "./components/WelcomeMassage";

const App = () => {



  const [todoItems, setTodoItems] = useState([])
 const handleNewItem = (itemName,itemDueDate)=>{
  
  const newTodoItems = [...todoItems,{
         name:itemName,
      deoDate:itemDueDate
  }
   
]
setTodoItems(newTodoItems)
 }

const handleDeleteItem = (todoItemName)=>{
  const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
  setTodoItems(newTodoItems)
}


 
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMassage></WelcomeMassage>}
      <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem}/>


    </center>
    
  );
};

export default App;
