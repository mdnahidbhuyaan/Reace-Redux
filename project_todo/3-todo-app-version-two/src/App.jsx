/* eslint-disable no-unused-vars */
import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

const App = () => {
  const todoItems = [
    {
      name: "Buy Milk",
      deoDate: "4/10/2023",
    },
    {
      name: "Go to Collage",
      deoDate: "4/10/2023",
    },
    {
      name: "Like this video",
      deoDate: "right now",
    },
  ];
  return (
    <center classNameName="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
};

export default App;
