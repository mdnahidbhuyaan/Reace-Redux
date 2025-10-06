/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMassage from "./components/WelcomeMassage";
import { TodoItemsContext } from "./store/todoItemsStore";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);


  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  const defaultTodoItems = [
    { name: "Buy Milk", dueDate: "Today" }
  ];

  return (
    <TodoItemsContext.Provider value={defaultTodoItems}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMassage todoItems={todoItems}></WelcomeMassage>
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </TodoItemsContext.Provider>
  );
};

export default App;
